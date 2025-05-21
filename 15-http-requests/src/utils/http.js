const backendFQDN = 'http://localhost:3000'
export async function fetchAvailablePlaces() {
  const resp = await fetch(`${backendFQDN}/places`);
  if (!resp.ok) {
    throw new Error('Failed to fetch places.');
  }
  let data = await resp.json();
  return data.places;
}

export async function fetchUserPlaces() {
  const resp = await fetch(`${backendFQDN}/users/places`);
  if (!resp.ok) {
    throw new Error('Failed to fetch places.');
  }
  let data = await resp.json();
  return data.places;
}

export async function updateUserPlaces(places) {
  const resp = await fetch(`${backendFQDN}/users/places`, {
    method: 'PUT',
    body: JSON.stringify({places}),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!resp.ok) {
    throw new Error('Failed to update user places.');
  }
  const data = await resp.json();
  return data.message;
}