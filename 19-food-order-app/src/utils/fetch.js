export const BACKEND_URL = 'http://localhost:3000';

export async function fetchMeals() {
  const resp = await fetch(`${BACKEND_URL}/meals`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (resp.ok) {
    return await resp.json();
  } else {
    throw new Error('Fetch meals failed.');
  }
}