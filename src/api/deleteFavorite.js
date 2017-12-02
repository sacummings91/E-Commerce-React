import env from '../env';

export default function deleteFavorite(favorite) {
  return fetch(`${env.API_BASE_URL}/favorites/${favorite.id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
