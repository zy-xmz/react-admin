import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';
// 引入和风天气图标
import 'qweather-icons/font/qweather-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
// 引入请求函数
import { request } from './request'
// 将axios挂载到原型中
React.Component.prototype.$axios = request;

// 引入redux store
import store from './store'


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
