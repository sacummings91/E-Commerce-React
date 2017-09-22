import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Image, Header, Button } from 'semantic-ui-react';

export default function ClothingItemComponent({ item, addToCart }) {
  function onClick(event) {
    event.preventDefault();
    addToCart(item);
  }
  return (
    <div className="ClothingItemComponent">
      <Card>
        <Image src={item.imageUrl} alt={item.name} />
        <Card.Content>
          <Header as="h2" textAlign="center">
            <NavLink exact to={`/products/${item.id}`}>
              {item.name || 'N/A'}
            </NavLink>
          </Header>
          <Header as="h3" textAlign="center">
            {item.price ? `$${item.price}` : 'N/A'}
          </Header>
          <Button
            className="add-to-cart-button"
            color="black"
            onClick={onClick}>
            <NavLink className="add-to-cart" exact to="/cart">
              Add To Cart
            </NavLink>
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}
