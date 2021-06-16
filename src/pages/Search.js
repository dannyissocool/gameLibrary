import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import GameDetails from '../components/GameDetails';
import Game from '../components/Game';
import { Container } from 'semantic-ui-react';
import { GameContext } from '../context/GameContext';

const Search = () => {
  const { currentGame } = useContext(GameContext);

  return (
    <Container>
      <SearchBar />
      {currentGame && <Game game={currentGame} />}
    </Container>
  );
};

export default Search;
