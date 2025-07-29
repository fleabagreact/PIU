import NameTable from "./components/NameTable";
import UsernameTable from "./components/UsernameTable";
import CityTable from "./components/CityTable";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <h1>Lista de Usuários via API</h1>
      <NameTable />
      <UsernameTable />
      <CityTable />
      <UserForm />
    </div>
  );
}

export default App;
