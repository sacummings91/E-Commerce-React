import createOrder from '../../api/createOrder';

export default function createOrderProcess(id) {
  return (dispatch, getState) => {
    return createOrder(id).then(createdOrder => {
      dispatch({ type: 'CREATE_FAVORITE', order: createdOrder });
      return createdOrder;
    });
  };
}
