import { useState, useEffect } from 'react';

export default function BackgroundInput() {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = texto.length > 5 ? '#ffeb3b' : '#90caf9';
  }, [texto]);

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  );
}
