import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LocaleProvider} from 'antd'
import App from './App';
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
