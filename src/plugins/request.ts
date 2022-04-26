import axios, { AxiosRequestConfig } from 'axios';
import { USER_TOKENS } from '../constants/config';
import { getFromLocalStorage } from '../services/local-storage-service';

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACK_END_URL
});

request.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getFromLocalStorage(USER_TOKENS.ACCESS_TOKEN);
  if (token) {
    (config.headers ??= {}).Authorization = `Bearer ${token}`;
  }
  return config;
});

export { request };
