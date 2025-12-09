export default function PaginationControls({ page, setPage, total, pageSize }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  return (
    <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
      <div>
        Showing{' '}
        <span className="font-medium">
          {total === 0 ? 0 : (page - 1) * pageSize + 1}
        </span>{' '}
        –{' '}
        <span className="font-medium">
          {Math.min(page * pageSize, total)}
        </span>{' '}
        of <span className="font-medium">{total}</span> results
      </div>

      <div className="flex items-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <span className="text-xs">
          Page <span className="font-semibold">{total === 0 ? 0 : page}</span>{' '}
          of <span className="font-semibold">{total === 0 ? 0 : totalPages}</span>
        </span>
        <button
          disabled={page === totalPages || total === 0}
          onClick={() => setPage(page + 1)}
          className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  )
}
