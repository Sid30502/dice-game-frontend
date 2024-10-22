import React, { useState, useEffect } from 'react';
import { getLeaderboard } from '../utils/api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboard().then((res) => setLeaderboard(res.data));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((player, index) => (
          <li key={index}>{player.username}: {player.score} points</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
