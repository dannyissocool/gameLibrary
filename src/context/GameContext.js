import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const GameContext = createContext();

const API_KEY = '1c211289f0f643ccbafa97db7fef6f7e';

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState('');
  const [currentGame, setCurrentGame] = useState('');
  const [favorites, setFavorites] = useState([]);

  const url = 'https://api.rawg.io';

  // Initial call
  useEffect(() => {
    (async () =>
      axios.get(`${url}/api/games?key=${API_KEY}`).then((res) => {
        const allResults = res.data.results;
        console.log(allResults);
        console.log(favorites);

        setGames(allResults.map((game) => game));
      }))();
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        query,
        setQuery,
        favorites,
        setFavorites,
        currentGame,
        setCurrentGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
