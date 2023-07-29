import axios from 'axios';
import { clearSession, getUser } from './auth';

const authFetch = axios.create({
  headers: {
    Authorization: `Bearer ${getUser(false)}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// authFetch.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.response.status === 401 &&
//       error.response.data.errors === 'Invalid token'
//     ) {
//       clearSession();
//       // window.location.replace('/');
//     }
//     return Promise.reject(error);
//   }
// );

export { authFetch as axios };
