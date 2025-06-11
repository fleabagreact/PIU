import './Card.css'

function Card({ character, isFlipped, onClick, theme }) {
  return (
    <div 
      className={`card ${theme} ${isFlipped ? 'flipped' : ''}`} 
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p className="origin">{character.origin}</p>
        </div>
        <div className="card-back">
          <h3>{character.name}</h3>
          <p className="origin">{character.origin}</p>
          <p className="description">{character.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card