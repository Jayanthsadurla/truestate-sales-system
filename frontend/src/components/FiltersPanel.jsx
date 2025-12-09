// frontend/src/components/FiltersPanel.jsx
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

const REGIONS = ["North", "South", "East", "West", "Central"];
const GENDERS = ["Male", "Female"];
const CATEGORIES = ["Clothing", "Electronics", "Beauty"];
const PAYMENT_METHODS = ["Cash", "UPI", "Net Banking", "Wallet", "Credit Card"];
const TAGS = [
  "casual", "formal", "cotton", "wireless", "smart",
  "gadgets", "organic", "skincare", "beauty"
];

export default function FiltersPanel({ filters, setFilters }) {
  const update = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggle = (key, value) => {
    setFilters((prev) => {
      const list = prev[key] || [];
      return list.includes(value)
        ? { ...prev, [key]: list.filter((v) => v !== value) }
        : { ...prev, [key]: [...list, value] };
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      customer_regions: [],
      genders: [],
      product_categories: [],
      payment_methods: [],
      tags: [],
      age_min: "",
      age_max: "",
      date_from: "",
      date_to: "",
      sort_by: "date_desc",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 space-y-6">

      {/* TOP ROW → SEARCH + SORT */}
      <div className="flex items-center justify-between gap-4">
        <SearchBar
          value={filters.search}
          onChange={(val) => update("search", val)}
        />

        <SortDropdown
          value={filters.sort_by}
          onChange={(val) => update("sort_by", val)}
        />
      </div>

      {/* GRID FILTER LAYOUT */}
      <div className="grid grid-cols-5 gap-4 text-sm">

        {/* REGION */}
        <div>
          <h3 className="font-semibold mb-1">Region</h3>
          {REGIONS.map((r) => (
            <label className="block" key={r}>
              <input
                type="checkbox"
                checked={filters.customer_regions.includes(r)}
                onChange={() => toggle("customer_regions", r)}
              />{" "}
              {r}
            </label>
          ))}
        </div>

        {/* GENDER */}
        <div>
          <h3 className="font-semibold mb-1">Gender</h3>
          {GENDERS.map((g) => (
            <label className="block" key={g}>
              <input
                type="checkbox"
                checked={filters.genders.includes(g)}
                onChange={() => toggle("genders", g)}
              />{" "}
              {g}
            </label>
          ))}
        </div>

        {/* CATEGORY */}
        <div>
          <h3 className="font-semibold mb-1">Category</h3>
          {CATEGORIES.map((c) => (
            <label className="block" key={c}>
              <input
                type="checkbox"
                checked={filters.product_categories.includes(c)}
                onChange={() => toggle("product_categories", c)}
              />{" "}
              {c}
            </label>
          ))}
        </div>

        {/* PAYMENT */}
        <div>
          <h3 className="font-semibold mb-1">Payment</h3>
          {PAYMENT_METHODS.map((p) => (
            <label className="block" key={p}>
              <input
                type="checkbox"
                checked={filters.payment_methods.includes(p)}
                onChange={() => toggle("payment_methods", p)}
              />{" "}
              {p}
            </label>
          ))}
        </div>

        {/* TAGS */}
        <div>
          <h3 className="font-semibold mb-1">Tags</h3>
          {TAGS.map((t) => (
            <label className="block" key={t}>
              <input
                type="checkbox"
                checked={filters.tags.includes(t)}
                onChange={() => toggle("tags", t)}
              />{" "}
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* AGE + DATE RANGE ROW */}
      <div className="grid grid-cols-3 gap-4 items-end">

        {/* AGE */}
        <div>
          <h3 className="font-semibold mb-1">Age</h3>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.age_min}
              onChange={(e) => update("age_min", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.age_max}
              onChange={(e) => update("age_max", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* DATE RANGE */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-1">Date Range</h3>
          <div className="flex gap-2">
            <input
              type="date"
              value={filters.date_from}
              onChange={(e) => update("date_from", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              value={filters.date_to}
              onChange={(e) => update("date_to", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
      </div>

      {/* CLEAR FILTERS BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={clearFilters}
          className="px-4 py-2 border rounded text-sm hover:bg-gray-100"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
