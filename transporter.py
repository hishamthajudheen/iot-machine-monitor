from enum import Enum
from typing import List, Optional
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt, JWTError

from fastapi import APIRouter, FastAPI, Request, HTTPException,Depends, status
from starlette.responses import Response
from starlette.websockets import WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

import models
from database import engine, SessionLocal
from sqlalchemy import exists
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field

models.Base.metadata.create_all(bind=engine) #sqlite setup boiler plate

def get_db(): #Database connection helper 
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

class User(BaseModel): #pydantic model for the User
    username: str = Field(min_length=1)
    email: str = Field(min_length=1)
    password: str = Field(min_length=1, max_length=100)
    
class TokenData(BaseModel): #pydantic model for token data
    username: Optional[str] = None


templates = Jinja2Templates(directory="templates") # Jinja templating stuff

SECRET_KEY = "e217c0da1d627ce49001186d17635a21f845345130570ef36e5ececa806e23a157"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 5
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


router = APIRouter()

def generate_token(data: dict):  #jwt_token genetor
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(request: Request): #returns current user and their token
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
        headers={'WWW-Authenticate':"Bearer"},
    )

    token = request.cookies.get("access_token")

    if token is None:
        print("Null token")

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username:str = payload.get('sub')
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception



class ClientTypes(Enum):
    ADMIN = "admin"
    NODEMCU = "node"
    CLIENT = "viewer"


async def read_json(websocket: WebSocket):
    try:
        while True:
            yield await websocket.receive_json()
    except WebSocketDisconnect:
        pass


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.device_connection = None

    async def connect(self, websocket: WebSocket, client: ClientTypes, key=None):
        await websocket.accept()


        if client == ClientTypes.NODEMCU:
            self.device_connection = websocket
            await self.broadcast({"type": "device", "status": "connected"})
        else:
            self.active_connections.append(websocket)

        await websocket.send_json({"type": "connection", "status": "connected"})

        async for data in read_json(websocket):
            if client == ClientTypes.NODEMCU:
                await self.from_boat(data)
            else:
                await self.from_client(data, websocket, client)

        await self.disconnect(websocket, client)

    async def disconnect(self, websocket: WebSocket, client: ClientTypes):
        if client == ClientTypes.BOAT:
            self.device_connection = None
            await self.broadcast({"type": "device", "status": "disconnected"})
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

    async def broadcast(self, param):
        for connection in self.active_connections:
            await connection.send_json(param)

    async def from_boat(self, data):
            await self.broadcast(data)

    async def from_client(self, data, websocket, client):
        if self.device_connection is not None:
            await self.device_connection.send_json(data)


manager = ConnectionManager()


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, client: ClientTypes, key=None):
    await manager.connect(websocket, client, key)



app = FastAPI(
    title="IOT Machine Monitoring API",
    description="The endpoints for the IOT_MM Website",
)

app.include_router(router)

app.mount("/static", StaticFiles(directory="static"), name="static")




@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/login") #for login button on index page
async def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post('/login', tags=["authentication"])
def login(response: Response, request: OAuth2PasswordRequestForm = Depends(), db:Session=Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == request.username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail= 'Username not valid'
        )
    if not pwd_context.verify(request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail='Invalid Password'
        )
    access_token = generate_token(
        data={"sub":user.username}
    )

    response.set_cookie(key='access_token', value=access_token, httponly=True)

    return {"access_token":access_token, "token_type":"bearer"}

@app.post("/logout", tags=["authentication"])
def logout(response: Response, current_user: TokenData = Depends(get_current_user)):
    response.delete_cookie("access_token")
    return {"message":"Logout successful"}




@app.get("/register") #for the register button in index page
async def register(request: Request):
    return templates.TemplateResponse("register.html", {"request": request})

@app.get("/list_users") #api endpint to list all users in db
def list_users(db: Session = Depends(get_db)):
    return db.query(models.User).all()

@app.post("/register") #api endpint to add a user to db
def create_user(request: User, db: Session = Depends(get_db)):
    hashed_password = pwd_context.hash(request.password)
    if db.query(exists().where(models.User.username == request.username)).scalar():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User already exists!"
        )
        
    new_user = models.User() 
    new_user.username = request.username
    new_user.email = request.email
    new_user.password = hashed_password
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
    
@app.delete("/register/{id}") #api endpint to remove a user from db using primarykey ie id
def delete(id, db: Session = Depends(get_db)):
    user_model = db.query(models.User).filter(models.User.id == id).first()
    if user_model is None:
        raise HTTPException(
            status_code=404,
            detail = "No such user found"
        )
    db.query(models.User).filter(models.User.id == id).delete()
    db.commit()
    return {'user deleted!'}

@app.get("/dashboard")
def dashboard(request: Request, db:Session = Depends(get_db), current_user: User = Depends(get_current_user)):  #
    return templates.TemplateResponse("dashboard.html", {"request": request})




@app.get("/about")
def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})



# if __name__ == "__main__":
#     import uvicorn
#
#     uvicorn.run("app", host="0.0.0.0", port=8000, reload=True)
