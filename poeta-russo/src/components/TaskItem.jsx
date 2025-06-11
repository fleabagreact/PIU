function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className={`task-item ${task.completed ? 'done' : ''}`}>
      <span onClick={() => onToggle(task.id)}>
        {task.completed ? '✅' : '⬜'} {task.text}
      </span>
      <button className="remove-btn" onClick={() => onRemove(task.id)}>🗑️</button>
    </li>
  )
}

export default TaskItem
