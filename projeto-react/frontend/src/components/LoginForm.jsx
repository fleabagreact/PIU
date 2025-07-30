import { useState } from 'react';

export default function LoginForm() {
  const [dados, setDados] = useState({ usuario: '', senha: '' });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', dados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="usuario" placeholder="Usuário" onChange={handleChange} />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
      <button type="submit">Entrar</button>
    </form>
  );
}
