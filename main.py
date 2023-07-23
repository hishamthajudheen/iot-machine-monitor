import queue
import time

import websockets
from fastapi import FastAPI, WebSocket, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import asyncio
data = ""
connected_clients = set()
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


class ToggleState(BaseModel):
    switch1: bool
    switch2: bool

class ConnectionManager:

    def __init__(self):
        self.connections = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connections.append(websocket)
        while True:
            pass

    async def broadcast(self, data: str):
        print(self.connections)
        for connection in self.connections:
            try:
                await connection.send_text(data)
            except Exception as e:
                print(e)


manager = ConnectionManager()
q = queue.Queue()

#
# @app.websocket("/ws/recieve")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     while True:
#         await asyncio.sleep(0.1)
#         payload = next(measurements)
#         await websocket.send_json(payload)


# @app.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     while True:
#         data = await websocket.receive_text()
#         print(data)
#         # await manager.broadcast(data)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, client=None):
    if client == "frontend":
        await manager.connect(websocket)
    else:

        connected_clients.add(websocket)
        await websocket.accept()
        try:
            while True:
                    data = await websocket.receive_text()
                    await manager.broadcast(data)
                    # Process the received data
                    print(f"Received message: {data}")
                    print("Message sent to clients")
        except Exception as e:
            print(f"WebSocket error: {e}")

@app.websocket("/ws/recieve")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)

    # try:
    #     while True:
    #         global data



            # data = await websocket.receive_text()
            # # asyncio.create_task(manager.broadcast(data))
            # # Process the received data
            # print(f"Received message: {data}")


    #             # Send a response message back to the client
    #             response = "Message received by server"
    #         await websocket.send_text(data)
    #         print("Message sent to frontend")
    #         time.sleep(2)
    #
    # except Exception as e:
    #     print(f"WebSocket error: {e}")


# async def send_data_to_clients(data):
#     # Send data to all connected clients
#     for client in connected_clients.copy():
#         try:
#             await client.send(data)
#         except Exception as e:
#             print(f"Error sending data to client: {e}")


@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/toggle")
async def toggle(toggle_state: ToggleState):
    # Process the toggle state
    switch1_state = toggle_state.switch1
    switch2_state = toggle_state.switch2
    # Do something with the toggle state
    if switch1_state == True:
        print("state1 high")
    else:
        print("state1 low")

    if switch2_state == True:
        print("state2 high")
    else:
        print("state2 low")

    return {"message": "Toggle state received"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
