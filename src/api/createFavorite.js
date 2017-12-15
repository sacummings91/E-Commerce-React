import env from '../env';

export default function createFavorite(userId, itemId) {
  return fetch(`${env.API_BASE_URL}/users/${userId}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      item_id: itemId
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}
