import env from '../env';

export default function createOrder(id, total, itemIds) {
  return fetch(`${env.API_BASE_URL}/users/${id}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      confirmationNum: Math.floor(1000000 + Math.random() * 9000000),
      userId: id,
      total: total,
      itemIds: itemIds
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}
