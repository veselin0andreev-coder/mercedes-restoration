import os
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Взимаме връзката към базата данни от променливите на средата (Environment Variables) в Render
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DATABASE_NAME = "restoration_db" # Примерно име на базата данни, може да го промениш

@app.on_event("startup")
async def startup_db_client():
    """Свързваме се с MongoDB при стартиране на приложението."""
    app.mongodb_client = AsyncIOMotorClient(MONGO_URL)
    app.mongodb = app.mongodb_client[DATABASE_NAME]

@app.on_event("shutdown")
async def shutdown_db_client():
    """Затваряме връзката при спиране на приложението."""
    app.mongodb_client.close()

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    """Взимаме данните от Mongo и ги подаваме към HTML шаблона."""
    
    # Примерно взимаме документа с прогреса (трябва да го създадеш в Mongo ръчно)
    progress_data = await app.mongodb["progress_collection"].find_one({"_id": "overall_status"})
    
    # Ако намерим данни, използваме тях; иначе използваме 28% по подразбиране
    if progress_data:
        total_progress = progress_data.get("percent", 28)
    else:
        total_progress = 28
    
    return templates.TemplateResponse(
        request=request, name="index.html",
        context={
            "message": "Добре дошли!",
            "status": "online",
            "overall_progress": total_progress
        }
    )
