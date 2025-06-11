function Note(props) {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1rem',
      position: 'relative'
    }}>
      {props.children}
      <button
        onClick={props.onRemover}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer'
        }}
      >
        Remover
      </button>
    </div>
  )
}

export default Note
