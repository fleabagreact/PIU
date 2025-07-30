import { useEffect, useState } from 'react';

function ListaAlbuns() {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbuns(data))
      .catch(error => console.error('Erro ao encontrar álbuns', error));
  }, []);

  return (
    <div>
      <h1>Álbums</h1>
      <ul>
        {albuns.map(album => ( <li key={album.id}>{album.title}</li>))}
      </ul>
    </div>
  );
}

export default ListaAlbuns;