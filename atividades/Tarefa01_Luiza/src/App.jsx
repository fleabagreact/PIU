import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <h1>Galeria de Personagens</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Gallery theme={theme} />
    </div>
  )
}

export default App