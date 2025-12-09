import pandas as pd
from sqlalchemy.orm import Session
from src.utils.database import SessionLocal
from src.models.sale import Sale

CSV_PATH = "data/sales.csv"
BATCH_SIZE = 10000   # best for MySQL

def load_csv_to_db():
    print("🚀 Starting CSV import...")
    df = pd.read_csv(CSV_PATH)

    # Rename CSV → database fields
    df = df.rename(columns={
        "Transaction ID": "transaction_id",
        "Date": "date",
        "Customer ID": "customer_id",
        "Customer Name": "customer_name",
        "Phone Number": "phone_number",
        "Gender": "gender",
        "Age": "age",
        "Customer Region": "customer_region",
        "Customer Type": "customer_type",
        "Product ID": "product_id",
        "Product Name": "product_name",
        "Brand": "brand",
        "Product Category": "product_category",
        "Tags": "tags",
        "Quantity": "quantity",
        "Price per Unit": "price_per_unit",
        "Discount Percentage": "discount_percentage",
        "Total Amount": "total_amount",
        "Final Amount": "final_amount",
        "Payment Method": "payment_method",
        "Order Status": "order_status",
        "Delivery Type": "delivery_type",
        "Store ID": "store_id",
        "Store Location": "store_location",
        "Salesperson ID": "salesperson_id",
        "Employee Name": "employee_name",
    })

    session: Session = SessionLocal()
    total_rows = len(df)
    print(f"📦 Total rows: {total_rows}")

    for start in range(0, total_rows, BATCH_SIZE):
        end = start + BATCH_SIZE
        batch = df[start:end].to_dict(orient="records")

        session.bulk_insert_mappings(Sale, batch)
        session.commit()

        print(f"Inserted {min(end, total_rows)} / {total_rows}")

    session.close()
    print("🎉 CSV import completed successfully!")

if __name__ == "__main__":
    load_csv_to_db()
