import { useState } from 'react'
// cria nome da função que vai diminuir e aumentar os valores
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      {/* botões com onclick para gerar eventos e aumentar e diminuir valores */}
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
      <button onClick={() => setContador(contador - 1)}>Clique aqui</button>
    </div>
  );
}

// exporta função
export default Contador