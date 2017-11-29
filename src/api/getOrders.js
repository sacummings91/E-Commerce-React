import env from '../env';

export default function getFavorites(id) {
  return fetch(`${env.API_BASE_URL}/users/${id}/orders`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
