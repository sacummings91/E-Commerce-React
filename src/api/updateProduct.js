import env from '../env.js';

export default function updateProduct(id, changes) {
  console.log('these are the changes', changes);
  return fetch(`${env.API_BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(changes)
  }).then(response => {
    return response.json();
  });
}
