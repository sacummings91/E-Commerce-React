import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Image, Header, Button } from 'semantic-ui-react';

export default function ClothingItemComponent({ item, addToCart }) {
  function onClick(event) {
    addToCart(item);
  }

  return (
    <div className="ClothingItemComponent">
      <Card style={{ maxWidth: '220px' }}>
        <Image
          fluid
          src={item.imageUrl}
          alt={item.name}
          as={NavLink}
          exact
          to={`/products/${item.id}`}
        />
        <Card.Content>
          <Header as="h4" className="itemName" textAlign="center">
            <NavLink
              exact
              to={`/products/${item.id}`}
              style={{ color: 'black' }}>
              {item.name || 'N/A'}
            </NavLink>
          </Header>
          <Header as="h4" textAlign="center">
            {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}
          </Header>
          <Button
            as={NavLink}
            exact
            to="/cart"
            className="add-to-cart-button"
            color="black"
            onClick={onClick}>
            Add To Cart
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}
