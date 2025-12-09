export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search name or phone"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-64 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    />
  )
}
