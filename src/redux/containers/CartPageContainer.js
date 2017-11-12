import { connect } from 'react-redux';

import CartPage from '../../components/cartpage/CartPage';
import LogoutProcess from '../thunks/logoutProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cartItems,
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    logout: () => dispatch(LogoutProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(CartPage);
