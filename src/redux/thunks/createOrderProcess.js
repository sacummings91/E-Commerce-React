import createOrder from '../../api/createOrder';

export default function createOrderProcess(id, total) {
  return (dispatch, getState) => {
    return createOrder(id, total).then(createdOrder => {
      dispatch({ type: 'CREATE_ORDER', order: createdOrder });
      return createdOrder;
    });
  };
}
