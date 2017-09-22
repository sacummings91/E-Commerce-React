import getProducts from '../../api/getProducts';

export default function getProductsProcess() {
  return (dispatch, getState) => {
    return getProducts().then(products => {
      dispatch({ type: 'GET_PRODUCTS', products });
      return products;
    });
  };
}
