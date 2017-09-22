import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

export default function FooterComponent() {
  return (
    <div className="footer">
      <Header as="h2">
        <NavLink className="admin" exact to="admin">
          ADMIN PAGE
        </NavLink>
      </Header>
    </div>
  );
}
