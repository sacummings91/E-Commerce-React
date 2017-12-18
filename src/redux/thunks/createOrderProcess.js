import createOrder from '../../api/createOrder';

export default function createOrderProcess(id, total, itemIds) {
  return (dispatch, getState) => {
    return createOrder(id, total, itemIds).then(createdOrder => {
      dispatch({ type: 'CREATE_ORDER', order: createdOrder });
      dispatch({ type: 'CLEAR_CART' });
      return createdOrder;
    });
  };
}
