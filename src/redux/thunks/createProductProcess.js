import createProduct from '../../api/createProduct';

export default function createProductProcess(changes) {
  return (dispatch, getState) => {
    return createProduct(changes).then(createdProduct => {
      dispatch({
        type: 'CREATE_PRODUCT',
        product: createdProduct
      });
      return createdProduct;
    });
  };
}
