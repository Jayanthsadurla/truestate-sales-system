// frontend/src/services/api.js

export async function getSales(params) {
  const query = new URLSearchParams()

  // Pagination
  query.append('page', params.page)
  query.append('page_size', params.page_size)

  // Sort
  if (params.sort_by) query.append('sort_by', params.sort_by)

  // Search
  if (params.search) query.append('search', params.search)

  // Multi-select filters
  ;(params.customer_regions || []).forEach((r) =>
    query.append('customer_region', r),
  )
  ;(params.genders || []).forEach((g) => query.append('gender', g))
  ;(params.product_categories || []).forEach((c) =>
    query.append('product_category', c),
  )
  ;(params.payment_methods || []).forEach((m) =>
    query.append('payment_method', m),
  )
  ;(params.tags || []).forEach((t) => query.append('tags', t))

  // Age range
  if (params.age_min) query.append('age_min', params.age_min)
  if (params.age_max) query.append('age_max', params.age_max)

  // Date range
  if (params.date_from) query.append('date_from', params.date_from)
  if (params.date_to) query.append('date_to', params.date_to)

  const url = `http://127.0.0.1:8000/sales/?${query.toString()}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch sales')

  const data = await res.json()

  return {
    items: data.items,   // <-- matches backend now
    total: data.total,
  }
}
