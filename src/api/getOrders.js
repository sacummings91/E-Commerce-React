import env from '../env';

export default function getOrders(id) {
  return fetch(`${env.API_BASE_URL}/users/${id}/orders`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
