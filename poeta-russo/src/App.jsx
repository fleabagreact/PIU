import { useState } from 'react'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')
  const [filter, setFilter] = useState('all')
  const [dark, setDark] = useState(false)

  const addTask = () => {
    if (taskText.trim() === '') return
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setTaskText('')
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'incomplete') return !task.completed
    return true
  })

  return (
    <div className={`app ${dark ? 'dark' : 'light'}`}>
      <header>
        <h1>Lista de Tarefas</h1>
        <button onClick={() => setDark(!dark)}>
          Alternar Tema
        </button>
      </header>

      <div className="add-task">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <FilterButtons onChange={setFilter} />

      <TaskList tasks={filteredTasks} onToggle={toggleComplete} onRemove={removeTask} />
    </div>
  )
}

export default App
