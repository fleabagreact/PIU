import { useEffect, useState } from 'react';

export default function TaskManager() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionar = () => {
    if (novaTarefa.trim() === '') return;
    const nova = { texto: novaTarefa, feita: false };
    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  };

  const toggleFeita = (index) => {
    const atualizadas = tarefas.map((t, i) =>
      i === index ? { ...t, feita: !t.feita } : t
    );
    setTarefas(atualizadas);
  };

  useEffect(() => {
    if (tarefas.length === 0) return;
    fetch('http://localhost:8000/tarefas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefas),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  }, [tarefas]);

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionar}>Cadastrar</button>

      <ul>
        {tarefas.map((t, i) => (
          <li
            key={i}
            onClick={() => toggleFeita(i)}
            style={{
              textDecoration: t.feita ? 'line-through' : 'none',
              background: t.feita ? '#c8e6c9' : '#f0f0f0',
            }}
          >
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
