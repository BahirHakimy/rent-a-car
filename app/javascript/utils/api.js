import axios from 'axios';
import { clearSession, getUser } from './auth';

const authFetch = (token) =>
  axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export { authFetch as axios };
