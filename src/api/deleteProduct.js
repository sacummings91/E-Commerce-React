import env from '../env.js';

export default function deleteProduct(Id) {
  return fetch(`${env.API_BASE_URL}/items/${Id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
