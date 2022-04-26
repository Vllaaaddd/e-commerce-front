import { request } from '../plugins/request';
import { URLs } from '../constants/request';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const userService = {
  register: (data: object, config: AxiosRequestConfig) => {
    return request.post(URLs.customer.register, data);
  },
  login: (data: object, config: AxiosRequestConfig) => {
    return request.post(URLs.customer.login, data);
  },
  refresh: (data: object, config: AxiosRequestConfig) => {
    return request.get(URLs.customer.refresh);
  }
};
