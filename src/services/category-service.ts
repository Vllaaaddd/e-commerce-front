import { request } from '../plugins/request';
import { URLs } from '../constants/request';
import { AxiosRequestConfig } from 'axios';

export const categoryService = {
  getByTypes: (data: object, config: AxiosRequestConfig) => {
    return request.get(URLs.categories.get, config);
  }
};
