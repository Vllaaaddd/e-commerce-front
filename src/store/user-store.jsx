import { makeAutoObservable } from 'mobx';
import { request } from '../plugins/request';
import { URLs } from '../constants/request';
import { setToLocalStorage } from '../services/local-storage-service';
import { USER_TOKENS } from '../constants/config';

export default class UserStore {
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await request.get(URLs.customer.refresh);
      const { accessToken, refreshToken } = response.data;
      setToLocalStorage(USER_TOKENS.ACCESS_TOKEN, accessToken);
      setToLocalStorage(USER_TOKENS.REFRESH_TOKEN, refreshToken);
      this.setAuth(true);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}
