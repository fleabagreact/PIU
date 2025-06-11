import { useState } from 'react'

function MudarCor() {
    // variavel com as cores
    const cores = ['red', 'blue', 'green', 'orange', 'purple', '#00CED1']
    // variavel para a mudança das cores
    const [bgColor, setBgColor] = useState(cores[0])
    const [bgIndex, setBgIndex] = useState(0)

    setBgIndex(prev => {
    // variavel que muda a medida que clica
      const novoIndex = (prev + 1) % cores.length
      setBgColor(cores[novoIndex])
      return novoIndex
    })
    return (
    <div style={{
        backgroundColor: bgColor,
        transition: 'background-color 0.5s',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: '3rem'
        }}>
    <button
    // mudar cor é chamada no on click para haver a mudança de cor
    onClick={MudarCor}
    style={{
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        marginTop: '2rem',
        cursor: 'pointer'
    }}
    >
        Mudar cor de fundo
      </button>
    </div>
  )
}

export default MudarCor