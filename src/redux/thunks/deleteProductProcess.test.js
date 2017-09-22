/* eslint-disable import/first */

import deleteProductProcess from './deleteProductProcess';

jest.mock('../../api/deleteProduct');
import deleteProduct from '../../api/deleteProduct';

import data from '../../mock-data';

describe('deleteProductProcess', () => {
  it('Calls deleteProduct API utility and dispatches DELETE_PRODUCT action', () => {
    const thunk = deleteProductProcess(data.products[0].id);
    expect(typeof thunk).toBe('function');

    deleteProduct.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteProduct).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_PRODUCT',
        productId: data.products[0].id
      });
    });
  });
});
