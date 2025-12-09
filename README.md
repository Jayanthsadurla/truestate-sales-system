## Retail Sales Dashboard

---

## 1. Overview

This project is a full-stack Retail Sales Dashboard built for exploring 1 million sales transactions.
It supports fast search, multi-select filters, sorting, and pagination.
The goal is to provide clean data exploration with a UI closely matching the provided Figma design.

----


## 2. Tech Stack
## Frontend

React (Vite)

Tailwind CSS

Axios

## Backend

FastAPI

SQLAlchemy ORM

MySQL (or any SQL database)

## Other

CSV → Database ETL loader

----


### 3. Search Implementation Summary

Search works on customer name and phone number.
It is:

Case-insensitive

Full-text-like using SQL ILIKE

Works together with filters, sorting, and pagination

Very fast even on 1M rows due to indexed columns

----


## 4. Filter Implementation Summary

Filters support multi-select and can work independently or in combination.

Supported filters:

Customer Region

Gender

Category

Payment Method

Tags (multi-match)

Age Range

Date Range

Each filter updates API query params, and backend applies SQL conditions without duplicate logic.

-----


## 5. Sorting Implementation Summary

Sorting options:

Date (Newest First)

Date (Oldest First)

Quantity

Customer Name (A–Z)

Final Amount (Low → High / High → Low)

Sorting works on backend using SQL ORDER BY and keeps filters/search active.

----


### 6. Pagination Implementation Summary

Page size: 10 items

Backend returns { total, page, page_size, items }

Supports Next / Previous

Always preserves search, filters, and sorting

Efficient SQL pagination using OFFSET + LIMIT.

----


## 7. Setup Instructions
## Backend Setup
cd backend
pip install -r requirements.txt
uvicorn src.main:app --reload

Load CSV Data Into Database
python -m src.utils.load_data

## Frontend Setup
cd frontend
npm install
npm run dev

## Open App

## Frontend:
http://localhost:5173/

## Backend API:
http://127.0.0.1:8000/
