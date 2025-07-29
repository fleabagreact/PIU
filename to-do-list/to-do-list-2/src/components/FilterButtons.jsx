function FilterButtons({ onChange, children }) {
  return (
    <div className="filters">
      <button onClick={() => onChange('all')}>Todas</button>
      <button onClick={() => onChange('completed')}>Completas</button>
      <button onClick={() => onChange('incomplete')}>Incompletas</button>
      {children}
    </div>
  )
}

export default FilterButtons
