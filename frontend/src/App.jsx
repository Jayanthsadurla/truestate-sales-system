import { useEffect, useState } from 'react'
import { getSales } from './services/api'
import FiltersPanel from './components/FiltersPanel'
import SalesTable from './components/SalesTable'
import PaginationControls from './components/PaginationControls'

function App() {
  const [sales, setSales] = useState([])
  const [total, setTotal] = useState(0)

  const [page, setPage] = useState(1)
  const pageSize = 10

  const [filters, setFilters] = useState({
    search: '',
    customer_regions: [],
    genders: [],
    product_categories: [],
    payment_methods: [],
    tags: [],
    age_min: '',
    age_max: '',
    date_from: '',
    date_to: '',
    sort_by: 'date_desc',
  })

  async function loadData() {
    try {
      const params = {
        page,
        page_size: pageSize,
        ...filters,
      }
      const data = await getSales(params)
      setSales(data.items)
      setTotal(data.total)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadData()
  }, [page, filters])

  // when filters change, reset to page 1
  useEffect(() => {
    setPage(1)
  }, [
    filters.search,
    filters.customer_regions,
    filters.genders,
    filters.product_categories,
    filters.payment_methods,
    filters.tags,
    filters.age_min,
    filters.age_max,
    filters.date_from,
    filters.date_to,
    filters.sort_by,
  ])

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <h1 className="text-lg font-semibold tracking-tight">
            Retail Sales Dashboard
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <FiltersPanel filters={filters} setFilters={setFilters} />

          <SalesTable sales={sales} />

          <PaginationControls
            page={page}
            setPage={setPage}
            total={total}
            pageSize={pageSize}
          />
        </div>
      </main>
    </div>
  )
}

export default App
