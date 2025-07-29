import Tema from './components/Tema';
import Fundo from './components/Fundo';
import Login from './components/Login';
import Lista from './components/Lista';
import Tarefas from './components/Tarefas';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Tema />
      <hr />
      <Fundo />
      <hr />
      <Login />
      <hr />
      <Lista />
      <hr />
      <Tarefas />
    </div>
  );
}
