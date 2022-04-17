import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import './i18n';
import { clearLocalStorage } from './services/local-storage-service';
import { E_COMMERCE } from './constants/config';

if (!localStorage.getItem(E_COMMERCE)) {
  clearLocalStorage();
}

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
