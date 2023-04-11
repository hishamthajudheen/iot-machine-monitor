from fastapi import FastAPI
from starlette.responses import RedirectResponse

app = FastAPI()
github_client_id = 'fa0752a4281fd3074eb4'

@app.get("/github-login")
async def github_login():
    return RedirectResponse(f'https://github.com/login/oauth/authorize?client_id={github_client_id}',status_code=302)
