import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 2. Store
import { Provider } from "react-redux";
import store, { history } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
