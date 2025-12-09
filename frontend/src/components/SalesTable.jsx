export default function SalesTable({ sales }) {
  if (!sales || sales.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No transactions found.
      </p>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600 border-b">
              <th className="px-4 py-2 text-left">Transaction ID</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Customer ID</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Product Category</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Total Amount</th>
              <th className="px-4 py-2 text-left">Final Amount</th>
              <th className="px-4 py-2 text-left">Customer Region</th>
              <th className="px-4 py-2 text-left">Product ID</th>
              <th className="px-4 py-2 text-left">Employee Name</th>
              <th className="px-4 py-2 text-left">Payment Method</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{row.transaction_id}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.customer_id}</td>
                <td className="px-4 py-2 font-medium">{row.customer_name}</td>
                <td className="px-4 py-2">{row.phone_number}</td>
                <td className="px-4 py-2">{row.gender}</td>
                <td className="px-4 py-2">{row.age}</td>
                <td className="px-4 py-2">{row.product_category}</td>
                <td className="px-4 py-2">{row.quantity}</td>
                <td className="px-4 py-2">{row.total_amount}</td>
                <td className="px-4 py-2">{row.final_amount}</td>
                <td className="px-4 py-2">{row.customer_region}</td>
                <td className="px-4 py-2">{row.product_id}</td>
                <td className="px-4 py-2">{row.employee_name}</td>
                <td className="px-4 py-2">{row.payment_method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
