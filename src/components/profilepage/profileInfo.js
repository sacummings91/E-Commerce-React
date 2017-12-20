import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import ClothingItemComponent from '../ClothingItemComponent';

export default class ProfileInfo extends Component {
  render() {
    const { authenticatedUser, addToCart } = this.props;
    return (
      <div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Header className="username" as="h1">
            Your Account Info
          </Header>
          <p className="name" as="h4">
            {authenticatedUser.firstName + ' ' + authenticatedUser.lastName}
          </p>
          <p className="email" as="h4">
            {authenticatedUser.email}
          </p>
          <div>
            <Header className="favorites" as="h2" style={{ marginTop: '30px' }}>
              Favorites
            </Header>
            <div className="ClothingItemsComponent">
              {authenticatedUser.favoriteItems.map(item => (
                <ClothingItemComponent
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
