export const BACKEND_URL = 'http://localhost:8080';

export function getAuthToken() {
  return localStorage.getItem('access_token');
}