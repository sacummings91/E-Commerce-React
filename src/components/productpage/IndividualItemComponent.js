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
    console.log(this.props);
    return !this.props.item ? null : (
      <div className="IndividualItemComponent">
        <div>
          <Image
            id="ItemImage"
            src={this.props.item.imageUrl}
            bordered
            size="medium"
          />
        </div>
        <div className="ItemInfo">
          <Header as="h1">{this.props.item.name}</Header>
          <p className="overflow-text">{this.props.item.description}</p>
          <div style={{ marginBottom: '50px', marginTop: '25px' }}>
            <Header as="h1">${this.props.item.price}</Header>
            <Header as="h1">SKU#: {this.props.item.id}</Header>
          </div>
          <div>
            <Button
              style={{
                margin: '0 10px 0 10px',
                padding: '12.5px 40px 12.5px 40px'
              }}
              color="black"
              onClick={this._addToCartClick}>
              <NavLink className="add-to-cart" exact to="/cart">
                Add To Cart
              </NavLink>
            </Button>
            {this.props.authenticatedUser ? (
              <Button color="black" onClick={this._favoriteItemClick}>
                Favorite
                {this.props.authenticatedUser.favorites ? (
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
    event.preventDefault();
    const { onAddToCart } = this.props;
    onAddToCart(this.props.item);
  };

  _favoriteItemClick = event => {
    event.preventDefault();
    const { onFavorite } = this.props;
    const favorite = this.props.authenticatedUser.favorites.find(favorite => {
      return this.props.item.id === favorite.itemId;
    });
    favorite
      ? onFavorite(this.props.authenticatedUser.id, this.props.item, favorite)
      : onFavorite(this.props.authenticatedUser.id, this.props.item, null);
  };
}
