/* eslint-disable import/first */

import createProductProcess from './createProductProcess';

jest.mock('../../api/createProduct');
import createProduct from '../../api/createProduct';

import data from '../../mock-data';

describe(createProductProcess, () => {
  it('Calls createProduct API utility, returns the newly created product, and dispatches CREATE_PRODUCT action', () => {
    const { id, ...productWithoutId } = data.products[0];
    const thunk = createProductProcess(productWithoutId);
    expect(typeof thunk).toBe('function');

    createProduct.mockReturnValueOnce(Promise.resolve({ ...data.products[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdProduct => {
      expect(createProduct).toBeCalled();
      expect(createdProduct).toEqual({ ...data.products[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_PRODUCT',
        product: createdProduct
      });
    });
  });
});
