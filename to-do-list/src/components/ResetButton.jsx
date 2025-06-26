function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} style={styles.button}>
      Resetar tudo
    </button>
  )
}

const styles = {
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}

export default ResetButton
