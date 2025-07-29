import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    onAddTask(inputValue.trim()) // Envia a tarefa para o App
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Adicionar</button>
    </form>
  )
}

const styles = {
  form: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '16px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '16px',
    cursor: 'pointer',
  },
}

export default TaskForm
