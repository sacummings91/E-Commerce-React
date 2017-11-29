import getOrders from '../../api/getOrders';

export default function getOrdersProcess() {
  return (dispatch, getstate) => {
    return getOrders().then(orders => {
      dispatch({ type: 'GET_ORDERS', orders });
      return orders;
    });
  };
}
