import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Header, Button, Icon } from 'semantic-ui-react';

export default function IndividualItemComponent({
  item,
  addToCart,
  addToFavorites,
  authenticatedUser
}) {
  function onAddToCart(event) {
    event.preventDefault();
    addToCart(item);
  }

  function onFavorite(event) {
    event.preventDefault();
    addToFavorites(authenticatedUser.id, item);
  }

  return !item ? null : (
    <div className="IndividualItemComponent">
      <div>
        <Image id="ItemImage" src={item.imageUrl} bordered size="medium" />
      </div>
      <div className="ItemInfo">
        <Header as="h1">{item.name}</Header>
        <p className="overflow-text">{item.description}</p>
        <div style={{ marginBottom: '50px', marginTop: '25px' }}>
          <Header as="h1">${item.price}</Header>
          <Header as="h1">SKU#: {item.id}</Header>
        </div>
        <div>
          <Button
            style={{
              margin: '0 10px 0 10px',
              padding: '12.5px 40px 12.5px 40px'
            }}
            color="black"
            onClick={onAddToCart}>
            <NavLink className="add-to-cart" exact to="/cart">
              Add To Cart
            </NavLink>
          </Button>
          {authenticatedUser ? (
            <Button color="black" onClick={onFavorite}>
              Favorite
              <Icon
                style={{ marginLeft: '20px' }}
                inverted
                size="large"
                color="red"
                name="heart"
              />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
