import env from '../env';

export default function getFavorites() {
  return fetch(`${env.API_BASE_URL}/orders`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
