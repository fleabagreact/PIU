import { useState } from "react";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", username: "", email: "" });
  const [response, setResponse] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => setResponse(data));
  }

  return (
    <div style={{ border: "2px solid teal", padding: "1rem", margin: "1rem" }}>
      <h2>Enviar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} /><br />
        <input name="username" placeholder="Username" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <button type="submit">Enviar</button>
      </form>
      {response && (
        <pre style={{ marginTop: "1rem", background: "#f4f4f4", padding: "1rem" }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
