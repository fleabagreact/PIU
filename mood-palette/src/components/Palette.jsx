// Componente que mostra uma paleta de cores
// Recebe as cores via props e também pode receber elementos filhos (children)
export default function Palette({ colors, children }) {
  return (
    <div className="palette-container">
      {children} {/* Título ou qualquer conteúdo extra passado */}
      <div className="palette">
        {/* Renderiza cada cor da paleta como um quadrado colorido */}
        {colors.map((color, index) => (
          <div key={index} className="color" style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  )
}
