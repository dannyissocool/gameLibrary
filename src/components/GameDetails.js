import React from 'react';
import { Container, Image, Header, Icon, Button } from 'semantic-ui-react';

const GameDetails = ({ game }) => {
  return (
    <Container textAlign='center'>
      <Header as='h1' color='grey' inverted>
        {game.name}
      </Header>
      <Header as='h5' color='grey' inverted>
        {game.rating}
        <Icon style={{ margin: '0 30px 0 5px' }} name='star' color='yellow' />
      </Header>
      <Image src={game.background_image} />
    </Container>
  );
};

export default GameDetails;
