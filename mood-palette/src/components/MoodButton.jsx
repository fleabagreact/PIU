// Componente reutilizável de botão de humor
// Recebe 'mood' e 'onClick' como props
export default function MoodButton({ mood, onClick }) {
  return (
    <button className="mood-button" onClick={onClick}>
      {mood}
    </button>
  )
}
