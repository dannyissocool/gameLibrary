import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { Form, Container, Button, Header } from 'semantic-ui-react';
import { GameContext } from '../context/GameContext';
import GameList from './GameList';

const SearchBar = () => {
  const { query, setQuery, setCurrentGame } = useContext(GameContext);
  const API_KEY = '1c211289f0f643ccbafa97db7fef6f7e';

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    const url = 'https://api.rawg.io';
    const slug = query.toString().split(' ').join('-').toLowerCase();

    await axios
      .get(`${url}/api/games/${slug}?key=${API_KEY}`)
      .then((res) => {
        const allResults = res.data;
        console.log(allResults);
        setCurrentGame(allResults);
      })
      .catch((err) => console.log(err));

    setQuery('');
  };

  const clearField = (e) => {
    console.log(e.target);
    e.target.value = '';
  };

  return (
    <Form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <Container>
        <Form.Field>
          <Header textAlign='center' style={{ color: 'white' }}>
            Find A Game
          </Header>
          <input placeholder='Search...' onChange={handleChange} />
        </Form.Field>
        <Button
          type='submit'
          primary
          style={{ width: '100%', marginBottom: '20px' }}
          content='Submit'
        />
      </Container>
    </Form>
  );
};

export default SearchBar;
