import React, { useContext } from 'react';
import GameList from '../components/GameList';
import { GameContext } from '../context/GameContext';
import { Header } from 'semantic-ui-react';

const Favorites = () => {
  const { favorites } = useContext(GameContext);
  return (
    <div>
      {favorites.length !== 0 ? (
        <GameList games={favorites} />
      ) : (
        <Header as='h2' textAlign='center' color='grey' inverted>
          Add some games to your favorites
        </Header>
      )}
    </div>
  );
};

export default Favorites;
