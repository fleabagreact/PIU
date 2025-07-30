import { useEffect, useState } from 'react';

export default function TemaToggle() {
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = tema === 'light' ? '#fff' : '#222';
    document.body.style.color = tema === 'light' ? '#000' : '#fff';
  }, [tema]);

  return (
    <div>
      <h2>Tema atual: {tema}</h2>
      <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>
        Alternar Tema
      </button>
    </div>
  );
}
