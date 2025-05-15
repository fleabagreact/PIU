import { useEffect, useState } from 'react'

const cores = ['red', 'blue', 'green', 'orange', 'purple', '#00CED1']

function gerarFavicon(color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="${color}" />
    </svg>
  `
  const blob = new Blob([svg], { type: 'image/svg+xml' })
  return URL.createObjectURL(blob)
}

function App() {
  const [faviconIndex, setFaviconIndex] = useState(0)
  const [bgIndex, setBgIndex] = useState(0)
  const [bgColor, setBgColor] = useState(cores[0])

  useEffect(() => {
    const favicon = document.getElementById('dynamic-favicon')
    if (favicon) {
      favicon.href = gerarFavicon(cores[0])
    }

    const intervalo = setInterval(() => {
      setFaviconIndex(prev => {
        const novoIndex = (prev + 1) % cores.length
        if (favicon) {
          const url = gerarFavicon(cores[novoIndex])
          favicon.href = url
        }
        return novoIndex
      })
    }, 2000)

    return () => clearInterval(intervalo)
  }, [])

  function mudarBackground() {
    setBgIndex(prev => {
      const novoIndex = (prev + 1) % cores.length
      setBgColor(cores[novoIndex])
      return novoIndex
    })
  }

  return (
    <div style={{
      backgroundColor: bgColor,
      transition: 'background-color 0.5s',
      minHeight: '100vh',
      textAlign: 'center',
      paddingTop: '3rem'
    }}>
      <button
        onClick={mudarBackground}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          marginTop: '2rem',
          cursor: 'pointer'
        }}
      >
        Mudar cor de fundo
      </button>
    </div>
  )
}

export default App
