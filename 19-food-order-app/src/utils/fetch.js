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

export async function checkoutOrder() {
  const resp = await fetch(`${BACKEND_URL}/orders`, {
    method: 'POST',
  })
  if (resp.ok) {

  } else {
    throw new Error('Checkout new order failed.');
  }
}