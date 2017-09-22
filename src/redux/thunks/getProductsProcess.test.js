/* eslint-disable import/first */

import getProductsProcess from './getProductsProcess';

jest.mock('../../api/getProducts');
import getProducts from '../../api/getProducts';

import data from '../../mock-data';

describe('getProductsProcess', () => {
  it('Calls getProducts API utility, returns array of products, and dispatches GET_PRODUCTS', () => {
    const thunk = getProductsProcess();
    expect(typeof thunk).toBe('function');

    getProducts.mockReturnValueOnce(Promise.resolve([...data.products]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(products => {
      expect(getProducts).toBeCalled();
      expect(products).toEqual([...data.products]);
      expect(dispatch).toBeCalledWith({ type: 'GET_PRODUCTS', products });
    });
  });
});
