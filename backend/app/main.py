from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor import motor_asyncio

from .routes import system, devices


api = FastAPI()
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
mongodb_connection = motor_asyncio.AsyncIOMotorClient("iot-garden_database_1", 27017)


api.include_router(system.router)
api.include_router(devices.router)
