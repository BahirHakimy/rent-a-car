import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const TOKEN_KEY = 'token';

function getUser() {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) return jwtDecode(token);
  return null;
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

function login(username, password) {
  axios.post('api/login', { username, password }).then((response) => {
    if (response.status === 200) {
      setToken(response.status);
    }
  });
}

function register(username, password) {
  const history = useHistory();
  axios.post('api/users', { username, password }).then((response) => {
    if (response.status === 201) {
      history.replace('login');
    }
  });
}
