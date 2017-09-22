export default function deleteProduct(productId) {
  return fetch(
    `https://api.airtable.com/v0/appaDTIil2odK72vS/products/${productId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer key3ct3d81IvkitCi'
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
