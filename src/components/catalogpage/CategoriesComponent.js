import React, { Component } from 'react';
import { Breadcrumb, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class CategoriesComponent extends Component {
  render() {
    const { selectedCategory } = this.props;
    return (
      <div>
        <Breadcrumb size="huge">
          <Breadcrumb.Section>
            <NavLink
              exact
              to="/?category=Shirts"
              isActive={() => selectedCategory === 'Shirts'}>
              Shirts
            </NavLink>
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section>
            <NavLink
              exact
              to="/?category=Jackets"
              isActive={() => selectedCategory === 'Jackets'}>
              Jackets
            </NavLink>
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section>
            <NavLink
              exact
              to="/?category=Bottoms"
              isActive={() => selectedCategory === 'Bottoms'}>
              Bottoms
            </NavLink>
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section>
            <NavLink
              exact
              to="/?category=Footwear"
              isActive={() => selectedCategory === 'Footwear'}>
              Footwear
            </NavLink>
          </Breadcrumb.Section>
        </Breadcrumb>
        <Header as="h1">
          {selectedCategory || 'Featured Items'}
        </Header>
      </div>
    );
  }
}
