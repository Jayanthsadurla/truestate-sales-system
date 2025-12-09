from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# If DATABASE_URL is set (Railway), use that.
# Else fall back to your local MySQL for development.
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:Root%40123@localhost:3306/truestate"
)

engine = create_engine(
    DATABASE_URL,
    echo=False,
    pool_pre_ping=True
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
