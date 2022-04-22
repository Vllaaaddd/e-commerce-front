import { request } from '../plugins/request';
import { URLs } from '../constants/request';

export const userService = {
  register: (data, config) => {
    return request.post(URLs.customer.register, data);
  },
  login: (data, config) => {
    return request.post(URLs.customer.login, data);
  },
  refresh: (data, config) => {
    return request.get(URLs.customer.refresh);
  }
};
