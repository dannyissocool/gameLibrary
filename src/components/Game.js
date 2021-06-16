import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { Image, Header, Icon, Button } from 'semantic-ui-react';

const Game = ({ game }) => {
  const { games, setGames, favorites, setFavorites } = useContext(GameContext);

  return (
    <div
      onClick={(e) => console.log(e.target)}
      className='game-div'
      style={{ padding: '10px', cursor: 'pointer' }}
    >
      <Header className='game-title' as='h3' textAlign='center' inverted>
        {game.name}
      </Header>
      <Header id='rating' size='small' textAlign='center' inverted color='grey'>
        {game.rating}
        <Icon
          style={{ margin: '0 30px 0 5px' }}
          name='star'
          size='tiny'
          color='yellow'
        />
        <Button
          onClick={() => {
            setFavorites([...favorites, game]);
            console.log(favorites);
          }}
          size='mini'
          primary
        >
          Add to Favorites
        </Button>
      </Header>

      <Image
        centered
        src={game.background_image}
        size='medium'
        className='background-image'
      />
    </div>
  );
};

export default Game;
