import env from '../env';

export default function createFavorite(id, itemId) {
  return fetch(`${env.API_BASE_URL}/users/${id}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: id,
      itemId: itemId
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}
