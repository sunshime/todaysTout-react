import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "nprogress/nprogress.css";
// import Router from "./router";

import {BrowserRouter} from 'react-router-dom'
import App from './App'
import store from "./store";
import './utils/iconfont'
import './utils/rem'
import './styles/base.css'

import ReactFastclick from "react-fastclick";

ReactFastclick(); // 解决IOS几点不生效问题
const Els = (
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Els, document.getElementById("root"));

serviceWorker.unregister();
