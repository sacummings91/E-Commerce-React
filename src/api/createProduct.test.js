import createProduct from './createProduct';

let mockDataResponse = {
  id: 1,
  name: 'Triple Triangle Tee',
  description: '100% Cotton Tee With Printed Graphic',
  category: 'Shirt',
  isFeatured: true,
  price: 30,
  imageURL:
    'https://www.hufworldwide.com/media/catalog/product/cache/4ab868458b71b776ed071afa6e64a965/T/R/TRIPLE-TRIANGLE-TEE_ARTIC-GREY_TS00057_ARCGY_01.jpg'
};

describe('createProduct', () => {
  it('Calls fetch and creats a product', () => {
    fetch.mockResponse(JSON.stringify(mockDataResponse));

    let product = {
      name: 'Triple Triangle Tee',
      description: '100% Cotton Tee With Printed Graphic',
      category: 'Shirt',
      isFeatured: true,
      price: 30,
      imageURL:
        'https://www.hufworldwide.com/media/catalog/product/cache/4ab868458b71b776ed071afa6e64a965/T/R/TRIPLE-TRIANGLE-TEE_ARTIC-GREY_TS00057_ARCGY_01.jpg'
    };

    return createProduct(product).then(newProduct => {
      expect(newProduct).toEqual(mockDataResponse);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
