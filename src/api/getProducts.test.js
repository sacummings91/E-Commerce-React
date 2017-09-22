import getProducts from './getProducts';

import data from '../mock-data';

describe('getProducts', () => {
  it('Calls fetch and returns products', () => {
    fetch.mockResponse(JSON.stringify({ records: data.products }));

    return getProducts().then(products => {
      expect(products).toEqual([...data.products]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
