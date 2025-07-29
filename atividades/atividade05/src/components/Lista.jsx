import { useState, useEffect } from 'react';

export default function Lista() {
  const [dados, setDados] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(d => setDados(d));
  }, []);

  const filtrados = dados.filter(item =>
    item.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h2>Lista</h2>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Filtrar nome"
      />
      <ul>
        {filtrados.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
