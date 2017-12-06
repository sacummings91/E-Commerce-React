import React, { Component } from 'react';

import LoginForm from './LoginForm';
import NavbarComponent from './../NavbarComponent';

export default class LoginPage extends Component {
  static defaultProps = {
    login: () => {}
  };

  render() {
    return (
      <div className="LoginPage">
        <NavbarComponent cartItems={this.props.cartItems} />
        <LoginForm onSubmit={this.props.login} />
      </div>
    );
  }
}
