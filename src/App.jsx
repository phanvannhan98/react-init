import { useState } from 'react';

import './App.css';

function App() {
  const initPlayers = [
    { id: 1, name: 'A', score: 1 },
    { id: 2, name: 'B', score: 1 },
  ];

  const [count, setCount] = useState(0);

  const [players, setPlayers] = useState([...initPlayers]);

  const reset = () => {
    setPlayers([...initPlayers]);
  };

  const addPlayer = () => {
    if (players.length >= 5) return;

    const id = players.length + 1;
    const name = String.fromCharCode(65 + players.length);
    const newPlayer = { id, name, score: 1 };

    setPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
  };

  const addScoreRandom = () => {};

  return (
    <>
      <button onClick={addPlayer}>add</button>
      <button onClick={reset}>reset</button>

      <div className="flex flex-row">
        {players.map(({ name, score }) => (
          <div className="flex flex-col gap-2">
            <div>{name}</div>
            <div>{score}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
