import updateProduct from '../../api/updateProduct';

export default function updateProductProcess(productId, changes) {
  return (dispatch, getState) => {
    return updateProduct(productId, changes).then(updatedProduct => {
      dispatch({ type: 'UPDATE_PRODUCT', product: updatedProduct });
      return updatedProduct;
    });
  };
}
