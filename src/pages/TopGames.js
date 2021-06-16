import React, { useContext } from 'react';
import GameList from '../components/GameList';
import { GameContext } from '../context/GameContext';

const TopGames = () => {
  const { games } = useContext(GameContext);
  return (
    <div>
      <GameList games={games} />
    </div>
  );
};

export default TopGames;
