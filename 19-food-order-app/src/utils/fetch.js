export const BACKEND_URL = 'http://localhost:3000';

export const fetchMealURL = `${BACKEND_URL}/meals`;

export async function fetchMeals() {
  const resp = await fetch(fetchMealURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (resp.ok) {
    return await resp.json();
  } else {
    const data = await resp.json();
    throw new Error(data.message || 'Fetch meals failed.');
  }
}

export const checkoutOrderUrl = `${BACKEND_URL}/orders`;

export async function checkoutOrder(customerInfo, items) {
  const resp = await fetch(checkoutOrderUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order: {
        customer: customerInfo,
        items,
      }
    }),
  })
  if (resp.ok) {
    return await resp.json();
  } else {
    throw new Error('Checkout new order failed.');
  }
}