import deleteProduct from '../../api/deleteProduct';

export default function deleteProductProcess(id) {
  return (dispatch, getState) => {
    return deleteProduct(id).then(() => {
      dispatch({ type: 'DELETE_PRODUCT', productId: id });
    });
  };
}
