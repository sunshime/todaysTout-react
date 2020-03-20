import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "nprogress/nprogress.css";

// import Router from "./router";
import Router from './App'

import store from "./store";

import ReactFastclick from "react-fastclick";

ReactFastclick(); // 解决IOS几点不生效问题

const App = (
  <Provider store={store}>
    <div>
        <Router/>
    </div>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

serviceWorker.unregister();
