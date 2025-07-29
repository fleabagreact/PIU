import { useEffect, useState } from "react";

export default function UsernameTable() {
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
    <div style={{ border: "2px dashed green", padding: "1rem", margin: "1rem" }}>
      <h2>Usuários</h2>
      <button onClick={() => setLoad(true)}>Buscar Usernames</button>
      <table>
        <thead>
          <tr><th>Username</th></tr>
        </thead>
        <tbody>
          {users.map(u => <tr key={u.id}><td>{u.username}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
