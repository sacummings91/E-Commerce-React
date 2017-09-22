import recordToProduct from './utils/recordToProduct';

export default function getProduct(id) {
  console.log('id', id);
  return fetch(`https://api.airtable.com/v0/appaDTIil2odK72vS/products/${id}`, {
    headers: {
      Authorization: 'Bearer key3ct3d81IvkitCi'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(recordToProduct);
}
