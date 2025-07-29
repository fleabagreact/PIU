import { useState, useEffect } from 'react';

export default function Tema() {
  const [escuro, setEscuro] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = escuro ? '#222' : '#fff';
    document.body.style.color = escuro ? '#fff' : '#000';
  }, [escuro]);

  return (
    <div>
      <h2>Tema</h2>
      <button onClick={() => setEscuro(!escuro)}>
        {escuro ? 'Claro' : 'Escuro'}
      </button>
    </div>
  );
}
