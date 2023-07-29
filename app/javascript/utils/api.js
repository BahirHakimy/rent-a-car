import axios from 'axios';
import { clearSession, getUser } from './auth';

const authFetch = axios.create({
  headers: {
    Authorization: `Bearer ${getUser(false)}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export { authFetch as axios };
