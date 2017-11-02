import env from '../env';

export default function getProducts() {
  return fetch(`${env.API_BASE_URL}/items`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
