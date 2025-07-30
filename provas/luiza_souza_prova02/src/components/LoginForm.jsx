import { useState } from 'react';

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === 'Iuri' && password === 'PIUprova') {
      setIsLoggedIn(true);
      setBackgroundColor('lightblue');
    } else {
      alert('Login inválido');
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '300px', alignItems: 'center'}}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <p style={{color: 'black'}}>O login é Iuri e a senha é PIUprova</p>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>Olá Iuri!</p>
      )}
    </div>
  );
}

export default LoginForm;