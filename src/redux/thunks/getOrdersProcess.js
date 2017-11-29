import getOrders from '../../api/getOrders';

export default function getOrdersProcess(id) {
  return (dispatch, getstate) => {
    return getOrders(id).then(orders => {
      dispatch({ type: 'GET_ORDERS', orders });
      return orders;
    });
  };
}
