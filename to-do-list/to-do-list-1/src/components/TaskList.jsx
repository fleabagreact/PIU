function TaskList({ tasks }) {
  return (
    <ul style={styles.list}>
      {tasks.map((task, index) => (
        <li key={index} style={styles.item}>
          {task}
        </li>
      ))}
    </ul>
  )
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
  },
  item: {
    padding: '0.5rem',
    borderBottom: '1px solid #ddd',
  },
}

export default TaskList
