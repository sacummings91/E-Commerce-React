import env from '../env';

export default function createOrder(id, total) {
  return fetch(`${env.API_BASE_URL}/users/${id}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      confirmation_num: Math.floor(1000000 + Math.random() * 9000000),
      user_id: id,
      total: total,
      item_id: []
    })
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      return response;
    });
}
