import { connect } from 'react-redux';

import CartPage from '../../components/cartpage/CartPage';
import LogoutProcess from '../thunks/logoutProcess';
import createOrderProcess from '../thunks/createOrderProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cartItems,
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    removeFromCart: index => dispatch({ type: 'REMOVE_ITEM', index }),
    confirmOrder: id => dispatch(createOrderProcess(id)),
    logout: () => dispatch(LogoutProcess.create(ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(CartPage);
