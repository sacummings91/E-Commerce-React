import recordToProduct from './utils/recordToProduct';

export default function getProducts() {
  return fetch('https://api.airtable.com/v0/appaDTIil2odK72vS/products', {
    headers: {
      Authorization: 'Bearer key3ct3d81IvkitCi'
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(recordToProduct));
}
