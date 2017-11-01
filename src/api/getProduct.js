import env from '../env.js';

export default function getProduct(id) {
  return fetch(
    `${env.REACT_APP_API_BASE_URL}/items/${id}`,
    {}
  ).then(response => {
    return response.json();
  });
}
