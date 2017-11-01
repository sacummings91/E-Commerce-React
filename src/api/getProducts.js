import env from '../env.js';

export default function getProducts() {
  return fetch(`${env.REACT_APP_API_BASE_URL}/items`, {})
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
