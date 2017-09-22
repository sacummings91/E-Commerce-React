import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ProductPage from '../../components/productpage/ProductPage';

import getProductProcess from '../thunks/getProductProcess';

function mapStateToProps(state, ownProps) {
  // console.log('ownProps', ownProps);
  // console.log('state', state);
  // const { productsById } = state;
  // const { productId } = ownProps.match.params;
  // const product = productsById[productId] || null;
  return {
    clothingItem: state.clothingItem
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDidMount: productId => dispatch(getProductProcess(productId)),
    addToCart: item => dispatch({ type: 'ADD_ITEM', item })
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
