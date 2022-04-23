import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context, userStore } from './context';
import 'antd/dist/antd.min.css';
import './i18n';
import { clearLocalStorage } from './services/local-storage-service';
import { E_COMMERCE } from './constants/config';

if (!localStorage.getItem(E_COMMERCE)) {
  clearLocalStorage();
}

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ userStore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
