import { request } from '../plugins/request';
import { URLs } from '../constants/request';

export const categoryService = {
  getByTypes: (data, config) => {
    return request.get(URLs.categories.get, config);
  }
};
