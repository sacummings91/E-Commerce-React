import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import ClothingItemComponent from '../ClothingItemComponent';

export default class ProfileInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Header className="username" as="h1">
            {this.props.authenticatedUser.username}
          </Header>
          <Header className="name" as="h4">
            {this.props.authenticatedUser.firstName}
            {this.props.authenticatedUser.lastName}
          </Header>
          <Header className="email" as="h4">
            {this.props.authenticatedUser.email}
          </Header>
          <div>
            <Header className="favorites" as="h2">
              Favorites
            </Header>
            <div className="ClothingItemsComponent">
              {this.props.authenticatedUser.favorites.map(item => (
                <ClothingItemComponent
                  key={item.id}
                  item={item}
                  addToCart={this.props.addToCart}
                />
              ))}
            </div>
          </div>
          <Header className="orders" as="h2">
            Orders
          </Header>
        </div>
      </div>
    );
  }
}
