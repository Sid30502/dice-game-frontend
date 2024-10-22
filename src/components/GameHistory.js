import React, { useState, useEffect } from 'react';
import { getGameHistory } from '../utils/api';

const GameHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getGameHistory().then((res) => setHistory(res.data));
  }, []);

  return (
    <div>
      <h2>Game History</h2>
      <ul>
        {history.map((game, index) => (
          <li key={index}>{game.username} - {game.score} points on {new Date(game.date).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
