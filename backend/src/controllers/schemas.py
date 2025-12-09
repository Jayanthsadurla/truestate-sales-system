from pydantic import BaseModel
from datetime import date

class SaleResponse(BaseModel):
    id: int
    transaction_id: int
    date: date
    customer_id: str
    customer_name: str
    phone_number: str
    gender: str
    age: int
    product_name: str
    product_category: str
    quantity: int
    total_amount: float
    final_amount: float
    customer_region: str
    product_id: str
    employee_name: str
    payment_method: str

    class Config:
        from_attributes = True

class SalesListResponse(BaseModel):
    total: int
    items: list[SaleResponse]
