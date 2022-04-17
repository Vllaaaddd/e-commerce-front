import axios from 'axios';
import { USER_TOKENS } from '../constants/config';
import { getFromLocalStorage } from '../services/local-storage-service';

const request = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_URL
});

request.interceptors.request.use((config) => {
  const token = getFromLocalStorage(USER_TOKENS.ACCESS_TOKEN);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export { request };
