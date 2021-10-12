import { push } from "connected-react-router";
import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  LOGOUT,
} from "../types";
import { loginApi } from "../apis";

const postAuthStart = () => ({
  type: POST_LOGIN_START,
});

export const postAuthSucces = (data) => ({
  type: POST_LOGIN_SUCCESS,
  payload: data,
});

const getAuthFailure = (error) => ({
  type: POST_LOGIN_FAILURE,
  payload: error,
});

const getLogout = () => ({
  type: LOGOUT,
});

export const getAuthAction = (user, password) => {
  return async (dispatch) => {
    try {
      dispatch(postAuthStart());
      const resp = await loginApi(user, password);
      const token = resp.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("data", JSON.stringify(resp.data));
      dispatch(postAuthSucces(resp.data));
      dispatch(push("/home"));
    } catch (err) {
      dispatch(getAuthFailure(err));
    }
  };
};

export const LogotAuthAction = (user, password) => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(getLogout());
    dispatch(push("/login"));
  };
};
