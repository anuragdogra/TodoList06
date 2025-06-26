import { useState } from 'react'

export default function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleAdd = () => {
    if (!title.trim()) return
    addTask({
      id: Date.now(),
      title,
      desc,
      status: 'Pending',
      date: new Date().toDateString(),
    })
    setTitle('')
    setDesc('')
  }

  return (
    <div className="space-y-2 mb-4">
     <input
  className="border rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300 bg-white shadow-sm"
  placeholder="Enter title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
     <textarea
  className="border rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-300 bg-white shadow-sm"
  placeholder="Enter description"
  value={desc}
  onChange={(e) => setDesc(e.target.value)}
/>
     <div className="flex justify-end gap-2 mt-2">
  <button
    className="border px-4 py-2 rounded hover:bg-gray-100 transition"
    onClick={() => {
      setTitle('');
      setDesc('');
    }}
  >
    Cancel
  </button>
  <button
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    onClick={handleAdd}
  >
    ADD
  </button>
</div>
    </div>
  )
}
