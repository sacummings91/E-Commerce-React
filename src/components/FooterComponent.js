import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
        {this.props.authenticatedUser &&
        this.props.authenticatedUser.role === 'ROLE_ADMIN' ? (
          <Header as="h2">
            <NavLink className="admin" exact to="admin">
              ADMIN PAGE
            </NavLink>
          </Header>
        ) : null}
      </div>
    );
  }
}
