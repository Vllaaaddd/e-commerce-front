import { E_COMMERCE, DEFAULT_LANGUAGE } from '../constants/config';

export const clearLocalStorage = () => {
  const e_commerce = {
    id: null,
    accessToken: null,
    refreshToken: null,
    language: DEFAULT_LANGUAGE
  };
  localStorage.setItem(E_COMMERCE, JSON.stringify(e_commerce));
};

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem(E_COMMERCE));
  if (!localObject) {
    return null;
  }
  return localObject[name];
};

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem(E_COMMERCE));
  localObject[name] = item;
  localStorage.setItem(E_COMMERCE, JSON.stringify(localObject));
};
