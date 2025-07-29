import { useEffect, useState } from "react";

export default function CityTable() {
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
    <div style={{ border: "2px dotted orange", padding: "1rem", margin: "1rem" }}>
      <h2>Cidades</h2>
      <button onClick={() => setLoad(true)}>Buscar Cidades</button>
      <table>
        <thead>
          <tr><th>Cidade</th></tr>
        </thead>
        <tbody>
          {users.map(u => <tr key={u.id}><td>{u.address.city}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
