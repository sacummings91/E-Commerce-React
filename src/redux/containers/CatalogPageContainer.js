import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import qs from 'qs';

import CatalogPage from '../../components/catalogpage/CatalogPage';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';
import getProductsProcess from '../thunks/getProductsProcess';
import LogoutProcess from '../thunks/logoutProcess';

function mapStateToProps(state, ownProps) {
  const cartItems = state.cartItems;
  const queryString = ownProps.location.search || '';
  const queryParams = qs.parse(queryString.replace('?', ''));
  const category = queryParams.category;
  const selectedCategory = state.clothingItems.filter(
    item => (category ? item.category === category : item.isFeatured)
  );
  const favoriteItems =
    state.usersById[state.authenticatedUserId].favoriteItems || [];

  return {
    clothingItems: category === 'Favorites' ? favoriteItems : selectedCategory,
    // clothingItems: selectedCategory,
    selectedCategory: category,
    cartItems,
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getProductsProcess()),
    addToCart: item => dispatch({ type: 'ADD_ITEM', item }),
    logout: () => dispatch(LogoutProcess.create(ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(CatalogPage);
