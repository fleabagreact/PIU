import { useState } from 'react';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCep = () => {
    setErro('');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)//pega api
      .then((res) => res.json())//puxa chance de erro ou certo
      .then((data) => {
        if (data.erro) {//se o cep for achado
          setErro('CEP não encontrado!');
          setEndereco(null);
        } else {
          setEndereco(data);
        }
      })
      .catch(() => {
        setErro('Erro ao buscar o CEP.');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Buscador de CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={buscarCep}>Buscar</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {endereco && (
        <div>
          <p><strong>Rua:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>UF:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
