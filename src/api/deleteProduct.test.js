import deleteProduct from './deleteProduct';

let mockDataResponse = {};

describe('deleteProduct', () => {
  it('Calls fetch and deletes a product', () => {
    fetch.mockResponse(JSON.stringify(mockDataResponse));

    let product = {
      name: 'Triple Triangle Tee',
      description: '100% Cotton Tee With Printed Graphic',
      category: 'Shirt',
      isFeatured: true,
      price: 30,
      imageUrl:
        'https://www.hufworldwide.com/media/catalog/product/cache/4ab868458b71b776ed071afa6e64a965/T/R/TRIPLE-TRIANGLE-TEE_ARTIC-GREY_TS00057_ARCGY_01.jpg'
    };

    return deleteProduct(product).then(deletedProduct => {
      expect(deletedProduct).toEqual(mockDataResponse);
    });
  });
});
