import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { toggle } from "./actions";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// Only for demonstration purposes. Do NOT leave this in an actual project.
window.store = store;
window.toggle = toggle;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
