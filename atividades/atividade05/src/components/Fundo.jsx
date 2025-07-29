import { useState, useEffect } from 'react';

export default function Fundo() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const cores = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
    const cor = cores[texto.length % cores.length];
    document.body.style.backgroundColor = cor;
  }, [texto]);

  return (
    <div>
      <h2>Fundo Dinâmico</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite aqui"
      />
    </div>
  );
}
