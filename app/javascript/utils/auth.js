import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TOKEN_KEY = 'token';

function getUser() {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) return jwtDecode(token);
  return null;
}

function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function register(username, password) {
  return axios.post('api/users', { username, password });
}

export { register, getUser, setToken, clearSession };
