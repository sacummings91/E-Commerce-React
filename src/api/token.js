import env from '../env';

export default async function authenticate(credentials) {
  try {
    const response = await fetch(`${env.API_BASE_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const body = await response.json();
    if (body.error) throw new Error(body.message);
    return body;
  } catch (error) {
    if (error.message.startsWith('AuthenticationService.ERROR_')) throw error;
    throw new Error('AuthenticationService.ERROR_UNEXPECTED');
  }
}
