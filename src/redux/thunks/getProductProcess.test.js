/* eslint-disable import/first */

import getProductProcess from './getProductProcess';

jest.mock('../../api/getProduct');
import getProduct from '../../api/getProduct';

import data from '../../mock-data';

describe('getProductProcess', () => {
  it('Calls getProduct API utility, returns a product, and dispatches GET_PRODUCT', () => {
    const thunk = getProductProcess();
    expect(typeof thunk).toBe('function');

    console.log(data.products[0]);
    getProduct.mockReturnValueOnce(Promise.resolve([data.products[0]]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(product => {
      expect(getProduct).toBeCalled();
      expect(product).toEqual([data.products[0]]);
      expect(dispatch).toBeCalledWith({ type: 'GET_PRODUCT', product });
    });
  });
});
