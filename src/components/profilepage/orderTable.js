import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import OrderRow from './orderRow';

export default class OrderTable extends Component {
  render() {
    const { orderInfo, clothingItems } = this.props;
    let itemIds = orderInfo.orderItems
      ? orderInfo.orderItems.map(item => item.item_id)
      : [];
    let orderItems = clothingItems.filter(clothingItem =>
      itemIds.includes(clothingItem.id)
    );

    return (
      <div>
        <Header className="orders" as="h2">
          Orders
        </Header>
        <div>
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle">
            <Grid.Column style={{ width: '550px' }}>
              <div style={{ border: '1px solid black' }}>
                <div
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    textTransform: 'uppercase'
                  }}>
                  <div style={{ display: 'inline-block' }}>
                    Confirmation Number
                  </div>
                  <div
                    style={{
                      display: 'inline-block'
                    }}>
                    Total
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#3f3f3f',
                    color: 'white',
                    fontWeight: 100,
                    letterSpacing: '2px'
                  }}>
                  {orderInfo.userOrders
                    ? orderInfo.userOrders.map(order => (
                        <OrderRow
                          key={order.id}
                          order={order}
                          clothingItems={orderItems}
                          orderItems={orderInfo.orderItems.filter(
                            orderItem => order.id === orderItem.order_id
                          )}
                        />
                      ))
                    : null}
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
