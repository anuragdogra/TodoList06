export default function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  const getStatusDotColor = (status) => {
    if (status === 'Pending') return 'bg-gray-400';
    if (status === 'In Progress') return 'bg-yellow-400';
    if (status === 'Completed') return 'bg-green-500';
    return '';
  };

  return (
    <div className="group bg-white p-4 rounded shadow-sm flex justify-between items-start hover:shadow-md transition">
      <div>
        <h3 className={`font-semibold ${
          task.status === 'Completed' ? 'line-through text-green-600' : 'text-gray-800'
        }`}>
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">{task.desc}</p>
        <p className="text-xs text-gray-400 mt-1">{task.date}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-sm">
            <span className={`h-2 w-2 rounded-full ${getStatusDotColor(task.status)}`}></span>
            {task.status}
          </span>
          <select
            className="text-sm border rounded px-2 py-1"
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value)}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <button onClick={() => onEdit(task)} className="text-orange-600 hover:text-orange-800">
            ✏️
          </button>
          <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
