import rootReducer from './rootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('rootReducer', () => {
  it('action.type GET_PRODUCTS', () => {
    const action = {
      type: 'GET_PRODUCTS',
      products: [...data.products]
    };

    const currentState = {
      clothingItems: []
    };

    deepFreeze(currentState);

    const nextState = {
      clothingItems: action.products
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type GET_PRODUCT', () => {
    const action = {
      type: 'GET_PRODUCT',
      product: [data.products[0]]
    };

    const currentState = {
      clothingItem: []
    };

    deepFreeze(currentState);

    const nextState = {
      clothingItem: action.product
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type ADD_ITEM', () => {
    const action = {
      type: 'ADD_ITEM',
      item: data.products[0]
    };

    const currentState = {
      cartItems: []
    };

    deepFreeze(currentState);

    const nextState = {
      cartItems: [action.item]
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type CREATE_PRODUCT', () => {
    const action = {
      type: 'CREATE_PRODUCT',
      product: { ...data.products[0] }
    };

    const currentState = {
      clothingItems: [data.products[1]]
    };

    deepFreeze(currentState);

    const nextState = {
      clothingItems: [action.product, data.products[1]]
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type UPDATE_PRODUCT', () => {
    const action = {
      type: 'UPDATE_PRODUCT',
      product: { ...data.products[0], name: data.products[0].name + ' BLACK' }
    };

    const currentState = {
      clothingItems: [data.products[0], data.products[1]]
    };

    deepFreeze(currentState);

    const nextState = {
      clothingItems: [action.product, data.products[1]]
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });

  it('action.type DELETE_PRODUCT', () => {
    const action = {
      type: 'DELETE_PRODUCT',
      productId: data.products[0].id
    };

    const currentState = {
      clothingItems: [data.products[0], data.products[1]]
    };

    deepFreeze(currentState);

    const nextState = {
      clothingItems: [data.products[1]]
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
