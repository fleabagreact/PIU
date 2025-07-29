import { useState, useEffect } from 'react';

export default function Tarefas() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState('');
  const [enviar, setEnviar] = useState(false);

  const add = () => {
    if (texto.trim() === '') return;
    setLista([...lista, { texto, feito: false }]);
    setTexto('');
  };

  const marcar = (i) => {
    const nova = lista.map((t, idx) =>
      idx === i ? { ...t, feito: !t.feito } : t
    );
    setLista(nova);
  };

  useEffect(() => {
    if (enviar && lista.length > 0) {
      fetch('http://localhost:8000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lista)
      })
        .then(r => r.json())
        .then(d => console.log('Enviado:', d))
        .catch(e => console.error('Erro:', e));
      setEnviar(false);
    }
  }, [enviar]);

  return (
    <div>
      <h2>Tarefas</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={add}>Adicionar</button>
      <button onClick={() => setEnviar(true)}>Cadastrar</button>
      <ul>
        {lista.map((t, i) => (
          <li
            key={i}
            onClick={() => marcar(i)}
            style={{
              textDecoration: t.feito ? 'line-through' : 'none',
              color: t.feito ? 'green' : 'black',
              cursor: 'pointer'
            }}
          >
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
