## Architecture Document
---

## 1. Backend Architecture

The backend is built using FastAPI with a clear service-based structure:

models/ → SQLAlchemy ORM models

database/ → DB engine + session

services/ → Business logic (filters, search, sorting, pagination)

routers/ → API endpoints

utils/ → CSV → DB loader module

The API exposes a single unified /sales endpoint that handles:

Search

Multi-select filters

Sorting

Pagination

The CSV (1M rows) is loaded once into MySQL using a batch-optimized ETL script.
----

## 2. Frontend Architecture

The frontend uses React + Vite, structured as:

src/components/ →

SearchBar

Filters

Sorting dropdown

Table view

Pagination

src/services/api.js → API wrapper

App.jsx → Main layout

main.jsx → App bootstrap

State is handled using React hooks, and API parameters update automatically when search, filters, or sorting changes.

Tailwind CSS is used for a clean UI consistent with Figma.
----

## 3. Data Flow

CSV → MySQL
Using load_data.py loads all 1M rows into DB.

Frontend → Backend API
User changes (search, filters, sort, page) generate API calls:

/sales?page=1&search=aisha&region=South&sort_by=date_desc


Backend → SQL Query
Backend builds dynamic query
→ applies all filters
→ applies sort
→ applies pagination

Backend → Frontend
API returns JSON:

{
  total: 41605,
  page: 1,
  page_size: 10,
  items: [...]
}


Frontend → UI Rendering
Table updates instantly.

----

## 4. Folder Structure
truestate-sales-system/
│
├── backend/
│   ├── src/
│   │   ├── database/
│   │   ├── models/
│   │   ├── services/
│   │   ├── routers/
│   │   ├── utils/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
│
└── docs/
    └── architecture.md

-----

## 5. Module Responsibilities
## Backend

models → define DB tables

services → filtering, search, sorting logic

routers → API endpoints

utils → CSV loader

main.py → FastAPI app entry

## Frontend

components → Search bar, filters, table, pagination

services/api.js → API calls

App.jsx → layout + data orchestration

main.jsx → project bootstrap