import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class NavbarComponent extends Component {
  static defaultProps = {
    onLogout: () => {}
  };

  render() {
    const { authenticatedUser } = this.props;
    console.log(this.props);
    return (
      <div>
        <Menu inverted style={{ borderRadius: 0 }}>
          <Menu.Item>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          {authenticatedUser ? (
            <Menu.Item>
              <NavLink exact to="/" onClick={this._handleClickLogout}>
                Logout
              </NavLink>
            </Menu.Item>
          ) : (
            <Menu.Item>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </Menu.Item>
          )}
          {authenticatedUser ? (
            <Menu.Item>
              <NavLink exact to="/profile">
                Profile
              </NavLink>
            </Menu.Item>
          ) : null}
          {authenticatedUser ? null : (
            <Menu.Item link={false}>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </Menu.Item>
          )}
          <Menu.Menu position="right">
            {authenticatedUser ? (
              <Menu.Item link={false}>
                Logged In As: {authenticatedUser.username}
              </Menu.Item>
            ) : null}
            <Menu.Item link={false}>
              <NavLink exact to="/cart">
                <i aria-hidden="true" className="cart icon" />
                Cart({this.props.cartItems.length})
              </NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }

  _handleClickLogout = event => {
    event.preventDefault();
    this.props.onLogout();
  };
}
