import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import qs from 'qs';

import CatalogPage from '../../components/catalogpage/CatalogPage';

import getProductsProcess from '../thunks/getProductsProcess';

function mapStateToProps(state, ownProps) {
  const queryString = ownProps.location.search || '';
  const queryParams = qs.parse(queryString.replace('?', ''));
  const category = queryParams.category;
  const clothingItems = state.clothingItems.filter(
    item => (category ? item.category === category : item.isFeatured)
  );

  return {
    clothingItems,
    selectedCategory: category
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getProductsProcess()),
    addToCart: item => dispatch({ type: 'ADD_ITEM', item })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(CatalogPage);
