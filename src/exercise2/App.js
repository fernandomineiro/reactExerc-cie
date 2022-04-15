import React, { useState } from 'react'
import Button from './Button';

const App = () => {
  const anecdotes = ["Opaa", "Testando o app!"];
   
  const [selected, setSelected] = useState(0);

  const randomPick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  };

  return (
    <div>
      <h1>Teste do dia</h1>
      <p>{anecdotes[selected]}</p>
      <Button onClick={randomPick} text="Próxima nota" />
    </div>
  );
}

export default App