import env from '../env';

export default function deleteFavorite(id) {
  return fetch(`${env.API_BASE_URL}/favorites/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
