import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ProductPage from '../../components/productpage/ProductPage';

import getProductProcess from '../thunks/getProductProcess';
import LogoutProcess from '../thunks/logoutProcess';
import deleteFavoriteProcess from '../thunks/deleteFavoriteProcess';
import createFavoriteProcess from '../thunks/createFavoriteProcess';
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
    onAddToCart: item => dispatch({ type: 'ADD_ITEM', item }),
    onFavorite: (id, item, favId) =>
      favId
        ? dispatch(deleteFavoriteProcess(favId))
        : dispatch(createFavoriteProcess(id, item.id)),
    logout: () => dispatch(LogoutProcess.create(ownProps.history))
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
