import React, { Component } from 'react';

import ProfileInfo from './ProfileInfo';
import NavbarComponent from './../NavbarComponent';

export default class ProfilePage extends Component {
  static defaultProps = {};

  render() {
    return (
      <div className="ProfilePage">
        <NavbarComponent
          onLogout={this.props.logout}
          authenticatedUser={this.props.authenticatedUser}
        />
        <ProfileInfo authenticatedUser={this.props.authenticatedUser} />
      </div>
    );
  }
}