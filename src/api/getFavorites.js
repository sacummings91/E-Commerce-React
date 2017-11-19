import env from '../env';

export default function getFavorites() {
  return fetch(`${env.API_BASE_URL}/favorites`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
