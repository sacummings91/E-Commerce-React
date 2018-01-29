import React, { Component } from 'react';

export default class OrderRow extends Component {
  state = {
    open: false
  };

  render() {
    const order = this.props.order;
    let orderItemIds = this.props.orderItems.map(item => item.itemId);
    let clothingItems = this.props.clothingItems.filter(item =>
      orderItemIds.includes(item.id)
    );
    let quantity = {};

    orderItemIds.forEach(id => {
      if (quantity.hasOwnProperty(id)) {
        quantity[id]++;
      } else {
        quantity[id] = 1;
      }
    });

    return (
      <div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            borderBottom: '1px solid #0f0f0f',
            borderTop: '1px solid #0f0f0f',
            cursor: 'pointer'
          }}
          onClick={this._onClick}>
          <div style={{ display: 'inline-block' }}>{order.confirmationNum}</div>
          <div
            style={{
              display: 'inline-block',
              float: 'right'
            }}>
            ${order.total}
          </div>
        </div>

        <div
          className={this.state.open ? 'open' : 'close'}
          style={{
            backgroundColor: 'white',
            color: 'black',
            letterSpacing: '1px'
          }}>
          {clothingItems.map((item, index) => (
            <div key={item.id}>
              <div
                style={{
                  display: 'inline-block',
                  width: '20px',
                  marginLeft: '-20px'
                }}>
                {index + 1 + '.'}
              </div>
              <div style={{ display: 'inline-block', width: '350px' }}>
                {item.name}
              </div>
              <div
                style={{
                  display: 'inline-block',
                  width: '20px'
                }}>{`x${quantity[item.id]}`}</div>
              <div
                style={{
                  display: 'inline-block',
                  width: '100px',
                  marginRight: '-50px'
                }}>
                {'$' + item.price.toFixed(2) + '+tax'}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  _onClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
}
