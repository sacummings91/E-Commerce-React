import env from '../env';

export default function deleteProduct(id) {
  return fetch(`${env.API_BASE_URL}/items/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
