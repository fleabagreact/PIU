import { useEffect, useState } from 'react';
import './App.css';

function Paleta() {
  const [colors, setColors] = useState([]);

  const generatePalette = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=analogic&count=5`)
      .then(res => res.json())
      .then(data => setColors(data.colors));
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <div className="paleta-container">
      <h1>Paleta de Cores</h1>
      <button className="paleta-button" onClick={generatePalette}>Nova paleta</button>

      <div className="paleta-gallery">
        {colors.map((color, i) => (
          <div
            key={i}
            className="paleta-card"
            style={{ backgroundColor: color.hex.value }}
          >
            <span>{color.hex.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paleta;
