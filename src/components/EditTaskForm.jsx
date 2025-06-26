import { useState } from 'react'

export default function EditTaskForm({ task, updateTask, cancelEdit }) {
  const [title, setTitle] = useState(task.title)
  const [desc, setDesc] = useState(task.desc)
  const [status, setStatus] = useState(task.status)

  const handleUpdate = () => {
    updateTask({ ...task, title, desc, status })
    cancelEdit()
  }

  return (
    <div className="bg-white p-4 shadow rounded space-y-2">
      <h2 className="text-xl font-bold mb-2">Edit Task</h2>
      <input className="border p-2 w-full" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full" value={desc} onChange={e => setDesc(e.target.value)} />
      <select className="border p-2 w-full" value={status} onChange={e => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <div className="flex justify-end gap-2">
        <button className="border px-4 py-2" onClick={cancelEdit}>Cancel</button>
        <button className="bg-blue-700 text-white px-4 py-2" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  )
}
