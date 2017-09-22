import getProduct from '../../api/getProduct';

export default function getProductProcess(id) {
  return (dispatch, getState) => {
    // getState(clothingItems) => returns current state of items
    // if this array has info, don't make api request, and send action with info
    // from the getState;
    // else call the api
    return getProduct(id).then(product => {
      dispatch({ type: 'GET_PRODUCT', product });
      return product;
    });
  };
}
