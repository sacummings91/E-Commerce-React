export default function rootReducer(currentState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...currentState,
        clothingItems: action.products
      };
    case 'GET_ORDERS':
      return {
        ...currentState,
        favorites: action.orders
      };
    case 'GET_PRODUCT':
      return { ...currentState, clothingItem: action.product };
    case 'ADD_ITEM':
      return {
        ...currentState,
        cartItems: [...currentState.cartItems, action.item]
      };
    case 'ADD_FAVORITE':
      console.log(currentState, action, '<<<<<<');
      return {
        ...currentState,
        userFavorites: [...currentState.userFavorites, action.favorite]
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
    case 'LOGIN':
      return {
        ...currentState,
        token: action.token,
        authenticatedUserId: action.user ? action.user.id : undefined,
        usersById: action.user
          ? {
              ...currentState.usersById,
              [action.user.id]: action.user
            }
          : currentState.usersById
      };
    case 'LOGOUT':
      return {
        ...currentState,
        token: undefined,
        authenticatedUserId: undefined,
        usersById: {
          ...currentState.usersById,
          [currentState.authenticatedUserId]: undefined
        },
        cartItems: undefined
      };
    default:
      return currentState;
  }
}
