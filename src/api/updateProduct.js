import env from '../env.js';

export default function updateProduct(id, changes, userId) {
  return fetch(`${env.API_BASE_URL}/item/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(changes),
    userId: userId
  }).then(response => {
    return response.json();
  });
}
