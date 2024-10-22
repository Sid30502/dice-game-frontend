import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);
export const joinGame = (data) => API.post('/game/join', data);
export const rollDice = () => API.post('/game/roll');
export const getLeaderboard = () => API.get('/game/leaderboard');
export const getGameHistory = () => API.get('/game/history');
