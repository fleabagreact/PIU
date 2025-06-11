import { useState } from 'react'
import MoodButton from './components/MoodButton'
import Palette from './components/Palette'

// Objeto que associa cada humor a uma paleta de cores
const moods = {
  Feliz: ['#FFE066', '#FF9F1C', '#FF6B6B', '#FFD6A5'],
  Triste: ['#6C5B7B', '#355C7D', '#C06C84', '#A8A7A7'],
  Enérgico: ['#06D6A0', '#118AB2', '#FFD166', '#EF476F'],
  Calmo: ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1'],
}

export default function App() {
  // Estado para armazenar o humor selecionado
  const [mood, setMood] = useState('Feliz')

  return (
    <div className="app">
      <h1>MoodPalette 🎨</h1>

      {/* Renderiza os botões de humor dinamicamente com base nas chaves do objeto moods */}
      <div className="button-group">
        {Object.keys(moods).map((m) => (
          <MoodButton key={m} mood={m} onClick={() => setMood(m)} />
        ))}
      </div>

      {/* Componente de paleta que exibe as cores do humor atual */}
      <Palette colors={moods[mood]}>
        <h2>Humor: {mood}</h2>
      </Palette>
    </div>
  )
}
