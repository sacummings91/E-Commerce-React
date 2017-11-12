import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Header, Button } from 'semantic-ui-react';

export default function IndividualItemComponent({ item, addToCart }) {
  function onClick(event) {
    event.preventDefault();
    addToCart(item);
  }
  return !item ? null : (
    <div className="IndividualItemComponent">
      <div>
        <Image id="ItemImage" src={item.imageUrl} bordered size="medium" />
      </div>
      <div className="ItemInfo">
        <Header as="h1">{item.name}</Header>
        <p className="overflow-text">{item.description}</p>
        <Header as="h1">${item.price}</Header>
        <Header as="h2">SKU#: {item.id}</Header>
        <Button color="black" onClick={onClick}>
          <NavLink className="add-to-cart" exact to="/cart">
            Add To Cart
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
