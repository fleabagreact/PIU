import './ThemeToggle.css'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
    </button>
  )
}

export default ThemeToggle