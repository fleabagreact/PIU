import { useState } from 'react'
import Note from './components/Note'

function App() {
  const [texto, setTexto] = useState('')
  const [notas, setNotas] = useState([])

  const adicionarNota = () => {
    if (texto.trim() !== '') {
      setNotas([...notas, texto])
      setTexto('')
    }
  }

  const removerNota = (index) => {
    const novasNotas = notas.filter((_, i) => i !== index)
    setNotas(novasNotas)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bloco de Notas</h1>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: '0.5rem' }}
        placeholder="Escreva sua nota aqui..."
      />

      <button onClick={adicionarNota} style={{ marginTop: '1rem' }}>
        Adicionar Nota
      </button>

      <div style={{ marginTop: '2rem' }}>
        {notas.map((n, i) => (
          <Note key={i} onRemover={() => removerNota(i)}>
            {n}
          </Note>
        ))}
      </div>
    </div>
  )
}

export default App
