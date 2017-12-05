import React, { Component } from 'react';

import ProfileInfo from './ProfileInfo';
import NavbarComponent from './../NavbarComponent';

export default class ProfilePage extends Component {
  static defaultProps = {};

  render() {
    const { authenticatedUser, logout, cartItems, userOrders } = this.props;
    return authenticatedUser ? (
      <div className="ProfilePage">
        <NavbarComponent
          onLogout={logout}
          cartItems={cartItems}
          authenticatedUser={authenticatedUser}
        />
        <ProfileInfo
          userOrders={userOrders}
          authenticatedUser={authenticatedUser}
        />
      </div>
    ) : (
      <div>
        <NavbarComponent />
        <div>Please login to access this page</div>
      </div>
    );
  }
}
