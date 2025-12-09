from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from src.utils.database import SessionLocal
from src.services.sales_service import get_sales

router = APIRouter(prefix="/sales", tags=["Sales"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def sales_list(
    page: int = 1,
    page_size: int = 10,
    search: str | None = None,

    customer_region: list[str] = Query(default=None),
    gender: list[str] = Query(default=None),
    product_category: list[str] = Query(default=None),
    payment_method: list[str] = Query(default=None),
    tags: list[str] = Query(default=None),

    age_min: int | None = None,
    age_max: int | None = None,
    date_from: str | None = None,
    date_to: str | None = None,
    sort_by: str = "date_desc",

    db: Session = Depends(get_db)
):
    return get_sales(
        db=db,
        page=page,
        page_size=page_size,
        search=search,
        customer_region=customer_region,
        gender=gender,
        product_category=product_category,
        payment_method=payment_method,
        tags=tags,
        age_min=age_min,
        age_max=age_max,
        date_from=date_from,
        date_to=date_to,
        sort_by=sort_by
    )
