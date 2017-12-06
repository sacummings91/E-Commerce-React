import React, { Component } from 'react';

import CreateAccountForm from './CreateAccountForm';
import NavbarComponent from './../NavbarComponent';

export default class CreateAccountPage extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    return (
      <div className="CreateAccountPage">
        <NavbarComponent cartItems={this.props.cartItems} />
        <CreateAccountForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}
