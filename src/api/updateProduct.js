import recordToProduct from './utils/recordToProduct';

export default function updateProduct(id, changes) {
  console.log('these are the changes', changes);
  delete changes.nid;
  return fetch(`https://api.airtable.com/v0/appaDTIil2odK72vS/products/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer key3ct3d81IvkitCi`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: changes
    })
  })
    .then(response => response.json())
    .then(record => recordToProduct(record));
}
