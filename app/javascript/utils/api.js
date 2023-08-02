import axios from 'axios';
import { clearSession } from './auth';

const authFetch = (token) => {
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        clearSession();
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export { authFetch as axios };
