import React from 'react';
import Game from './Game';

import { Grid } from 'semantic-ui-react';
import '../style.css';

const GameList = ({ games }) => {
  return (
    <Grid className='game-list' container stackable columns={3}>
      {games.map((game) => (
        <Grid.Column key={game.id}>
          <Game game={game} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default GameList;
