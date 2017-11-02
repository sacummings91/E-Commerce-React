import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function NavbarComponent() {
  return (
    <div>
      <Menu inverted>
        <Menu.Item>
          <NavLink exact to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </Menu.Item>
        <Menu.Item link={false}>
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item link={false}>
            <NavLink exact to="/cart">
              <i aria-hidden="true" className="cart icon" />
              Cart
            </NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
