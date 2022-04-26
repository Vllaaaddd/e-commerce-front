import { createContext } from 'react';
import UserStore from '../store/user-store';

interface State {
  userStore: UserStore;
}

export const userStore = new UserStore();

export const Context = createContext<State>({ userStore });
