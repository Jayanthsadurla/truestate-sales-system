from sqlalchemy import Column, Integer, String, Float, Date, Text
from src.utils.database import Base

class Sale(Base):
    __tablename__ = "sales"

    id = Column(Integer, primary_key=True, autoincrement=True)

    transaction_id = Column(Integer, index=True)
    date = Column(Date, index=True)

    customer_id = Column(String(50), index=True)
    customer_name = Column(String(255), index=True)
    phone_number = Column(String(50), index=True)
    gender = Column(String(20), index=True)
    age = Column(Integer, index=True)
    customer_region = Column(String(50), index=True)
    customer_type = Column(String(50))

    product_id = Column(String(50), index=True)
    product_name = Column(String(255))
    brand = Column(String(100))
    product_category = Column(String(100), index=True)
    tags = Column(Text)

    quantity = Column(Integer)
    price_per_unit = Column(Float)
    discount_percentage = Column(Float)
    total_amount = Column(Float)
    final_amount = Column(Float)

    payment_method = Column(String(50), index=True)
    order_status = Column(String(50))
    delivery_type = Column(String(100))
    store_id = Column(String(50))
    store_location = Column(String(100))
    salesperson_id = Column(String(50))
    employee_name = Column(String(255))
