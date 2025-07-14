import {redirect} from "react-router-dom";
import {TOKEN_EXPIRED_SIGNAL} from "./index";

export function getTokenDuration() {
  const storedExpiration = localStorage.getItem('auth_expiration');
  const expirationDate = new Date(storedExpiration);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}

export function getAuthToken() {
  const authToken = localStorage.getItem('access_token');
  if (!authToken) {
    return null;
  }
  const isTokenExpired = getTokenDuration() < 0;

  if (isTokenExpired) {
    return TOKEN_EXPIRED_SIGNAL;
  } else {
    return authToken;
  }
}

export function checkAuthLoader() {
   const token = getAuthToken();
   if (!token) {
     return redirect('/auth');
   }
   return null;
}