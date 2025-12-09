from datetime import datetime
from sqlalchemy import or_
from sqlalchemy.orm import Session
from src.models.sale import Sale


def get_sales(
    db: Session,
    page: int,
    page_size: int,
    search: str | None,
    customer_region: list[str] | None,
    gender: list[str] | None,
    product_category: list[str] | None,
    payment_method: list[str] | None,
    tags: list[str] | None,
    age_min: int | None,
    age_max: int | None,
    date_from: str | None,
    date_to: str | None,
    sort_by: str,
):
    query = db.query(Sale)

    # --------------------- SEARCH ---------------------
    if search:
        like = f"%{search}%"
        query = query.filter(
            or_(
                Sale.customer_name.ilike(like),
                Sale.phone_number.ilike(like),
                Sale.product_name.ilike(like),   # <-- REQUIRED
            )
        )

    # --------------------- FILTERS --------------------
    if customer_region:
        query = query.filter(Sale.customer_region.in_(customer_region))

    if gender:
        query = query.filter(Sale.gender.in_(gender))

    if product_category:
        query = query.filter(Sale.product_category.in_(product_category))

    if payment_method:
        query = query.filter(Sale.payment_method.in_(payment_method))

    if tags:
        for t in tags:
            query = query.filter(Sale.tags.ilike(f"%{t}%"))

    if age_min is not None:
        query = query.filter(Sale.age >= age_min)

    if age_max is not None:
        query = query.filter(Sale.age <= age_max)

    if date_from:
        query = query.filter(Sale.date >= datetime.fromisoformat(date_from))

    if date_to:
        query = query.filter(Sale.date <= datetime.fromisoformat(date_to))

    # ---------------------- SORTING -------------------
    if sort_by == "date_desc":
        query = query.order_by(Sale.date.desc())
    elif sort_by == "date_asc":
        query = query.order_by(Sale.date.asc())
    elif sort_by == "quantity":
        query = query.order_by(Sale.quantity.desc())
    elif sort_by == "customer_name":
        query = query.order_by(Sale.customer_name.asc())
    elif sort_by == "amount_desc":
        query = query.order_by(Sale.final_amount.desc())
    elif sort_by == "amount_asc":
        query = query.order_by(Sale.final_amount.asc())

    # --------------------- PAGINATION -----------------
    total = query.count()
    offset = (page - 1) * page_size
    rows = query.offset(offset).limit(page_size).all()

    # ----------------- RESPONSE SHAPE -----------------
    return {
        "total": total,
        "page": page,
        "page_size": page_size,
        "items": rows,
    }
