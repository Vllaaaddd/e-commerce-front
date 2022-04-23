import { createContext } from 'react';
import UserStore from '../store/user-store';

export const userStore = new UserStore();

export const Context = createContext({ userStore });
