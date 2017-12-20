import updateProduct from '../../api/updateProduct';

export default function updateProductProcess(productId, changes, userId) {
  console.log(productId, changes, userId);
  return (dispatch, getState) => {
    return updateProduct(productId, changes, userId).then(updatedProduct => {
      dispatch({ type: 'UPDATE_PRODUCT', product: updatedProduct });
      return updatedProduct;
    });
  };
}
