from fastapi import FastAPI,HTTPException, Depends
from pydantic import BaseModel, Field
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
class IotMonitor(BaseModel):
    user_name: str = Field(min_length=1)
    user_email: str = Field(min_length=1, max_length=100)
    user_password: str = Field(min_length=1,max_length=100)
    

@app.get("/")
def list_users(db: Session = Depends(get_db)):
    return db.query(models.IotMonitor).all()

@app.post("/")
def new_user(user: IotMonitor, db: Session = Depends(get_db)):
    IotMonitor_model = models.IotMonitor()
    IotMonitor_model.user_name = user.user_name
    IotMonitor_model.user_email = user.user_email
    IotMonitor_model.user_password = user.user_password
    
    db.add(IotMonitor_model)
    db.commit()
    return user

@app.put("/{user_id}")
def update_user(user_id:int, user: IotMonitor, db:Session = Depends(get_db)):
    IotMonitor_model = db.query(models.IotMonitor).filter(models.IotMonitor.id == user_id).first()
    if IotMonitor_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"User {user_id}: Doesn't exist"
        )
    IotMonitor_model.user_name= user.user_name
    IotMonitor_model.user_email = user.user_email
    IotMonitor_model.user_password = user.user_password
    
    db.add(IotMonitor_model)
    db.commit()
    return user

@app.delete("/{user_id}")
def delete_user(user_id: int,user: IotMonitor, db: Session = Depends(get_db)):
   IotMonitor_model = db.query(models.IotMonitor).filter(models.IotMonitor.id == user_id).first()
   if IotMonitor_model is None:
        raise HTTPException(
            status_code=404,
            detail=f"User {user_id}: Doesn't exist"
        )
  
   db.query(models.IotMonitor).filter(models.IotMonitor.id == user_id).delete()
   db.commit()