import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ResetButton from './components/ResetButton'

function App() {
  const [tasks, setTasks] = useState([])

  // Adiciona uma nova tarefa à lista
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  // Reseta todas as tarefas
  const resetTasks = () => {
    setTasks([])
  }

  return (
    <div style={styles.container}>
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
      <ResetButton onReset={resetTasks} />
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  }
}

export default App
