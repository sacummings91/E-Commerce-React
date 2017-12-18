import React, { Component } from 'react';
import { Header, Table, Grid } from 'semantic-ui-react';

import ClothingItemComponent from '../ClothingItemComponent';

export default class ProfileInfo extends Component {
  render() {
    const { authenticatedUser, addToCart, userOrders } = this.props;
    return (
      <div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Header className="username" as="h1">
            {authenticatedUser.username}
          </Header>
          <Header className="name" as="h4">
            {authenticatedUser.firstName}
            {authenticatedUser.lastName}
          </Header>
          <Header className="email" as="h4">
            {authenticatedUser.email}
          </Header>
          <div>
            <Header className="favorites" as="h2">
              Favorites
            </Header>
            <div className="ClothingItemsComponent">
              {authenticatedUser.favoriteItems.map(item => (
                <ClothingItemComponent
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
          <Header className="orders" as="h2">
            Orders
          </Header>
          <div>
            <Grid
              textAlign="center"
              style={{ height: '100%' }}
              verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Table celled inverted>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Confirmation Number</Table.HeaderCell>
                      <Table.HeaderCell>Total</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {userOrders.map(order => (
                      <Table.Row key={order.id}>
                        <Table.Cell>{order.confirmationNum}</Table.Cell>
                        <Table.Cell>${order.total}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
