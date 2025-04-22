import React from 'react';

export function App() {
  return (
    <div className='App'>
      <h1>Contador feito em React</h1>
      <p>Inicie a interação para ver a mágica acontecer!</p>
      <ContadorReact />
    </div>
  );
}

function ContadorReact() {
  const [contador, setContador] = React.useState(0);

  return (
    <div className="contador">
      <p>{contador}</p>
      <div className="botoes">
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(0)}>Resetar</button>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');

export default App;
