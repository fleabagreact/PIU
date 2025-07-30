import TemaToggle from './components/TemaToggle';
import BackgroundInput from './components/BackgroundInput';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Exercícios React</h1>
      <hr />
      <TemaToggle />
      <hr />
      <BackgroundInput />
      <hr />
      <LoginForm />
      <hr />
      <UserList />
      <hr />
      <TaskManager />
    </div>
  );
}

export default App;
