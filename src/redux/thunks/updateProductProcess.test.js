/* eslint-disable import/first */

import updateProductProcess from './updateProductProcess';

jest.mock('../../api/updateProduct');
import updateProduct from '../../api/updateProduct';

import data from '../../mock-data';

describe('updateProductProcess', () => {
  it('Calls updateProduct API utility, returns the updated created product, and dispatches UPDATE_PRODUCT action', () => {
    const { id, ...changes } = data.products[0];
    const thunk = updateProductProcess(id, changes);
    expect(typeof thunk).toBe('function');

    updateProduct.mockReturnValueOnce(Promise.resolve({ ...data.products[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedProduct => {
      expect(updateProduct).toBeCalled();
      expect(updatedProduct).toEqual({ ...data.products[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_PRODUCT',
        product: updatedProduct
      });
    });
  });
});
