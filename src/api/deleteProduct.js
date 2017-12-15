import env from '../env';

export default function deleteProduct(id) {
  return fetch(`${env.API_BASE_URL}/item/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
