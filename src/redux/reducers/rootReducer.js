export default function rootReducer(
  currentState = {
    clothingItems: [],
    clothingItem: {},
    cartItems: []
  },
  action
) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...currentState, clothingItems: action.products };
    case 'GET_PRODUCT':
      return { ...currentState, clothingItem: action.product };
    case 'ADD_ITEM':
      return {
        ...currentState,
        cartItems: [...currentState.cartItems, action.item]
      };
    case 'CREATE_PRODUCT':
      return {
        ...currentState,
        clothingItems: [action.product, ...currentState.clothingItems]
      };
    case 'UPDATE_PRODUCT':
      return {
        ...currentState,
        clothingItems: currentState.clothingItems.map(
          product =>
            product.id === action.product.id ? action.product : product
        )
      };
    case 'DELETE_PRODUCT':
      return {
        ...currentState,
        clothingItems: currentState.clothingItems.filter(
          product => product.id !== action.productId
        )
      };
    case 'CREATE_USER':
      return {
        ...currentState,
        usersById: {
          ...currentState.usersById,
          [action.user.id]: action.user
        }
      };
    default:
      return currentState;
  }
}
