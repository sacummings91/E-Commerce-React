import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../adminpage/ProductForm.css';
import { NavLink } from 'react-router-dom';
import { Table, Button, Header } from 'semantic-ui-react';

export default class PriceTableComponent extends Component {
  static defaultProps = {
    onClick: () => {}
  };

  constructor(props) {
    super(props);

    this.items = this.items || [];
  }

  render() {
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    for (let item of this.props.items) {
      subtotal = subtotal + parseInt(item.price, 10);
    }
    tax = subtotal * 0.09;
    total = subtotal + tax;
    this.props.items.total = total
    console.log(this.props);
    let itemIds = this.props.items.map(item => item.id)
    this.props.items.itemIds = itemIds
    console.log(itemIds);

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
          <ToastContainer
            position="top-right"
            type="default"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
          />
          <Button color="black" as={NavLink} exact to="/">
            Continue Shopping
          </Button>
          <Button color="black" onClick={this._onClick}>
            Proceed To Checkout
          </Button>
        </div>
      </div>
    );
  }

  _onClick = event => {
    const { confirmOrder, authenticatedUser, items } = this.props;
    confirmOrder(authenticatedUser.id, items.total, items.itemIds);
    toast('Order Successful!', {
      className: 'dark-toast',
      progressClassName: 'transparent-progress'
    });
  };
}
