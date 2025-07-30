import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDogs = () => {
    setLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random/5')
      .then(res => res.json())
      .then(data => {
        setDogs(data.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="container">
      <h1>🐶 Galeria de Cachorros</h1>

      <button className="button-refresh" onClick={fetchDogs}>
        Ver outros doguinhos
      </button>

      {loading ? (
        <p>Carregando doguinhos...</p>
      ) : (
        <div className="gallery">
          {dogs.map((url, index) => (
            <div className="card" key={index}>
              <img src={url} alt={`Dog ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
