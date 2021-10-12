import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth";
import countryReducer from "./country";
import stateReducer from "./state";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    country: countryReducer,
    state: stateReducer,
  });

export default reducers;
