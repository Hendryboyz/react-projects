import {getAuthToken, checkAuthLoader} from './auth';

export const BACKEND_URL = 'http://localhost:8080';
export const TOKEN_EXPIRED_SIGNAL = 'TOKEN_EXPIRED';

export function tokenLoader() {
  return getAuthToken();
}

export {getAuthToken, checkAuthLoader};