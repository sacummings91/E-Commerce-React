import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Header } from 'semantic-ui-react';

export default function PriceTableComponent({ items }) {
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  for (let item of items) {
    subtotal = subtotal + parseInt(item.price, 10);
  }
  tax = subtotal * 0.09;
  total = subtotal + tax;

  return (
    <div>
      <Header className="overview" as="h1">
        OVERVIEW
      </Header>
      <Table className="product-table" striped collapsing basic="very">
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Subtotal:</Header>
            </Table.Cell>
            <Table.Cell textAlign="right">
              <Header as="h3">${Number(subtotal).toFixed(2)}</Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h3">Tax:</Header>
            </Table.Cell>
            <Table.Cell textAlign="right">
              <Header as="h3">${Number(tax).toFixed(2)}</Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h2">Total:</Header>
            </Table.Cell>
            <Table.Cell textAlign="right">
              <Header as="h2">${total.toFixed(2)}</Header>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div>
        <Button color="black" as={NavLink} exact to="/">
          Continue Shopping
        </Button>
        <Button color="black">Proceed To Checkout</Button>
      </div>
    </div>
  );
}
