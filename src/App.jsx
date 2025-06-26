import { useEffect, useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import EditTaskForm from './components/EditTaskForm'
import TaskList from './components/TaskList'
import StatusFilter from './components/StatusFilter'
import Header from './components/Header'

const getLocalTasks = () => JSON.parse(localStorage.getItem('tasks')) || []

function App() {
  const [tasks, setTasks] = useState(getLocalTasks)
  const [editingTask, setEditingTask] = useState(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => setTasks([task, ...tasks])
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id))
  const updateTask = (updatedTask) =>
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t))

  const toggleStatus = (id, status) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t))

  const filteredTasks = tasks.filter(task => 
    filter === 'All' ? true : task.status === filter
  )

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Left Panel */}
      <div className="md:w-1/2 flex flex-col bg-white shadow">
        <Header title="TO-DO APP" />
        <div className="p-6 overflow-auto">
          <AddTaskForm addTask={addTask} />
          <StatusFilter filter={filter} setFilter={setFilter} />
          <TaskList
            tasks={filteredTasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onStatusChange={toggleStatus}
          />
        </div>
      </div>

      {/* Right Panel for Edit */}
      <div className="md:w-1/2 flex flex-col bg-white shadow">
        {editingTask && (
          <>
            <Header title="Edit Task" onBack={() => setEditingTask(null)} />
            <div className="p-6 overflow-auto">
              <EditTaskForm
                task={editingTask}
                updateTask={updateTask}
                cancelEdit={() => setEditingTask(null)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
