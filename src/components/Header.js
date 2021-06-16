import React, { Component } from 'react';

import { Menu, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        style={{ borderRadius: '0', position: 'sticky', top: 0, zIndex: 10 }}
        inverted
      >
        <Container>
          <Menu.Item
            as={Link}
            style={{ border: 'none' }}
            name='gamepad'
            active={activeItem === 'gamepad'}
            onClick={this.handleItemClick}
            to='/'
          >
            <Icon name='gamepad' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              name='Top Games'
              active={activeItem === 'Top Games'}
              onClick={this.handleItemClick}
              to='/'
            />
            <Menu.Item
              as={Link}
              name='Search'
              active={activeItem === 'Search'}
              onClick={this.handleItemClick}
              to='/search'
            />
            <Menu.Item
              as={Link}
              name='Favorites'
              active={activeItem === 'Favorites'}
              onClick={this.handleItemClick}
              to='/favorites'
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
