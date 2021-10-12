import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reducers from "./reducers/reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducers(history),
//   composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
// );

const store = createStore(
  reducers(history),
  {},
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

console.log(store);

export default store;
