from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
async def get_home():
    html_file_path = "static/sample.html"
    return FileResponse(html_file_path)
