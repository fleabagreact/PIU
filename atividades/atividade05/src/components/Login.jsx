import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    console.log({ user, senha });
  };

  return (
    <form onSubmit={enviar}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
