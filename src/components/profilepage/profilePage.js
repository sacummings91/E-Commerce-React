import React, { Component } from 'react';

import ProfileInfo from './profileInfo';
import NavbarComponent from './../NavbarComponent';
import OrderTable from './orderTable';

export default class ProfilePage extends Component {
  static defaultProps = {};

  render() {
    const {
      authenticatedUser,
      logout,
      cartItems,
      orderInfo,
      addToCart,
      clothingItems
    } = this.props;
    return authenticatedUser ? (
      <div className="ProfilePage">
        <NavbarComponent
          onLogout={logout}
          cartItems={cartItems}
          authenticatedUser={authenticatedUser}
        />
        <ProfileInfo
          authenticatedUser={authenticatedUser}
          addToCart={addToCart}
        />
        <OrderTable clothingItems={clothingItems} orderInfo={orderInfo} />
      </div>
    ) : (
      <div>
        <NavbarComponent />
        <div>Please login to access this page</div>
      </div>
    );
  }
}
