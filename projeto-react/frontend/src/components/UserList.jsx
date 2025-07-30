import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const filtrados = users.filter((u) =>
    u.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {filtrados.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
