import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class ProfileInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header className="username" as="h1">
          {this.props.authenticatedUser.username}
        </Header>
        <Header className="favorites" as="h2">
          Favorites
        </Header>
        <Header className="orders" as="h2">
          Orders
        </Header>
      </div>
    );
  }
}
