export default function StatusFilter({ filter, setFilter }) {
  const options = ['All', 'Pending', 'In Progress', 'Completed']
  return (
    <div className="flex gap-2 mb-4">
      {options.map(opt => (
        <button
          key={opt}
          className={`px-3 py-1 rounded border ${filter === opt ? 'bg-blue-700 text-white' : 'text-gray-700'}`}
          onClick={() => setFilter(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
