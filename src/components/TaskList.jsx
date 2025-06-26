import TaskItem from './TaskItem'

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))
      )}
    </div>
  )
}
