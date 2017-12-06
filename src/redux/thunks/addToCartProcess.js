export default function addToCartProcess(item) {
  return (dispatch, getState) => {
    let cart = JSON.parse(localStorage.getItem('cartItems'));
    if (!cart) {
      localStorage.setItem('cartItems', JSON.stringify([]));
      cart = JSON.parse(localStorage.getItem('cartItems'));
      cart.push(item.id);
      localStorage.setItem('cartItems', JSON.stringify(cart));
    } else {
      cart = JSON.parse(localStorage.getItem('cartItems'));
      cart.push(item.id);
      localStorage.setItem('cartItems', JSON.stringify(cart));
    }
    dispatch({ type: 'ADD_ITEM', item });
    return item;
  };
}
