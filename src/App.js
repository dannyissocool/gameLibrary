import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';

import GameList from './components/GameList';
import Error from './pages/Error';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import TopGames from './pages/TopGames';
import { GameProvider } from './context/GameContext';
import { Divider } from 'semantic-ui-react';

function App() {
  return (
    <>
      <Header />
      <GameProvider>
        <Switch>
          <Route exact path='/' component={TopGames} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact component={Error} />
        </Switch>
      </GameProvider>
    </>
  );
}

export default App;
