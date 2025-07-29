import { useEffect, useState } from "react";

export default function NameTable() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }
  }, [load]);

  return (
    <div style={{ border: "2px solid purple", padding: "1rem", margin: "1rem" }}>
      <h2>Nomes</h2>
      <button onClick={() => setLoad(true)}>Buscar Nomes</button>
      <table>
        <thead>
          <tr><th>Nome</th></tr>
        </thead>
        <tbody>
          {users.map(u => <tr key={u.id}><td>{u.name}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
