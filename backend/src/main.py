from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routes.sales_routes import router
from src.utils.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS so frontend (5173) can call backend (8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
