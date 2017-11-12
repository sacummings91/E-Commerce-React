import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ProductPage from '../../components/productpage/ProductPage';

import getProductProcess from '../thunks/getProductProcess';
import LogoutProcess from '../thunks/logoutProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state, ownProps) {
  return {
    clothingItem: state.clothingItem,
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDidMount: productId => dispatch(getProductProcess(productId)),
    addToCart: item => dispatch({ type: 'ADD_ITEM', item }),
    logout: () => dispatch(LogoutProcess.create())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifeCycle = lifecycle({
  componentDidMount() {
    const { productId } = this.props.match.params;
    this.props.onDidMount(productId);
  }
});

export default connectToStore(withLifeCycle(ProductPage));
