export default function SortDropdown({ value, onChange }) {
  return (
    <select
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="date_desc">Date (Newest First)</option>
      <option value="quantity">Quantity (High → Low)</option>
      <option value="customer_name">Customer Name (A–Z)</option>
    </select>
  )
}
