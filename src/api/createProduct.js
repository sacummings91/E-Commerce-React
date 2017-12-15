import env from '../env';

export default function createProduct(product) {
  return fetch(`${env.API_BASE_URL}/item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: product.name,
      description: product.description,
      category: product.category,
      is_featured: product.isFeatured || false,
      price: product.price,
      image_URL: product.imageUrl
    })
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response;
    });
}
