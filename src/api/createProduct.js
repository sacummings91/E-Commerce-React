import recordToProduct from './utils/recordToProduct';

export default function createProduct(product) {
  console.log(product);
  return fetch('https://api.airtable.com/v0/appaDTIil2odK72vS/products', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer key3ct3d81IvkitCi',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        nid: product.nid,
        name: product.name,
        description: product.description,
        category: product.category,
        isFeatured: product.isFeatured,
        price: product.price,
        imageUrl: product.imageUrl
      }
    })
  })
    .then(response => response.json())
    .then(recordToProduct);
}
