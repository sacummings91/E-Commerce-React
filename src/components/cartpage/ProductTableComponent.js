import React from 'react';
import { Table, Image, Header, Icon } from 'semantic-ui-react';

export default function ProductTableComponent({ items, removeFromCart }) {
  function onClick(event, index) {
    removeFromCart(index);
  }

  return (
    <div className="ProductTable">
      <Table striped collapsing basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {!items ? null : (
          <Table.Body>
            {items.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Icon
                    name="remove"
                    onClick={event => {
                      onClick(event, index);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Image src={item.imageUrl} shape="rounded" size="tiny" />
                </Table.Cell>
                <Table.Cell>
                  <Header as="h3">{item.name}</Header>
                </Table.Cell>
                <Table.Cell textAlign="right">
                  ${item.price.toFixed(2)}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        )}
      </Table>
    </div>
  );
}
