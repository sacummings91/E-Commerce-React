import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Header, Button, Icon } from 'semantic-ui-react';

export default class IndividualItemComponent extends Component {
  static defaultProps = {
    onAddToCart: () => {},
    onFavorite: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item, authenticatedUser } = this.props;
    const favorite = authenticatedUser.favorites.find(favorite => {
      return item.id === favorite.itemId;
    });

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
              as={NavLink}
              exact
              to="/cart"
              style={{
                margin: '0 10px 0 10px',
                padding: '12.5px 40px 12.5px 40px'
              }}
              color="black"
              onClick={this._addToCartClick}>
              Add To Cart
            </Button>
            {authenticatedUser ? (
              <Button color="black" onClick={this._favoriteItemClick}>
                Favorite
                {favorite ? (
                  <Icon
                    style={{ marginLeft: '20px' }}
                    inverted
                    size="large"
                    color="red"
                    name="heart"
                  />
                ) : null}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  _addToCartClick = event => {
    const { onAddToCart } = this.props;
    onAddToCart(this.props.item);
  };

  _favoriteItemClick = event => {
    event.preventDefault();
    const { item, authenticatedUser, onFavorite } = this.props;
    const favorite = authenticatedUser.favorites.find(favorite => {
      return item.id === favorite.itemId;
    });
    favorite
      ? onFavorite(authenticatedUser.id, item, favorite)
      : onFavorite(authenticatedUser.id, item, null);
  };
}
