import React, { useState } from 'react';
import { joinGame, rollDice } from '../utils/api';

const Game = () => {
  const [username, setUsername] = useState('');
  const [players, setPlayers] = useState([]);
  const [diceValue, setDiceValue] = useState(1);

  const handleJoin = async () => {
    const response = await joinGame(username);
    setPlayers(response.data.players);
  };

  const handleRoll = async () => {
    const response = await rollDice();
    setDiceValue(response.data.diceValue);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">🎲 Dice Game</h1>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleJoin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-6"
        >
          Join Game
        </button>

        <h2 className="text-xl font-semibold mb-4">Players:</h2>
        <ul className="list-disc pl-6">
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Roll the Dice</h2>
        <button
          onClick={handleRoll}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Roll Dice
        </button>

        <p className="text-center text-2xl mt-4">🎲 Dice Value: {diceValue}</p>
      </div>
    </div>
  );
};

export default Game;
