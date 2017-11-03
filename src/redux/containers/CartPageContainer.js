import { connect } from 'react-redux';

import CartPage from '../../components/cartpage/CartPage';

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cartItems
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(CartPage);
