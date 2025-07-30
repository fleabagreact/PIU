import { useEffect, useState } from 'react';
import './App.css';

function NASA() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
      .then(res => res.json())
      .then(data => setPhotos(data));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="nasa-container">
      <h1>🚀 Imagens Espaciais da NASA</h1>
      <button onClick={fetchPhotos} className="nasa-button">Ver novas imagens</button>

      <div className="nasa-gallery">
        {photos.map((item, i) => (
          <div className="nasa-card" key={i}>
            <img src={item.url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p className="nasa-description">{item.explanation.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NASA;
