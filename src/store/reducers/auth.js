import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  LOGOUT,
} from "../types";

const data = localStorage.getItem("data");
const realData = data ? JSON.parse(data) : null;

const initialState = {
  login: {
    isLoading: false,
    succes: null,
    data: realData,
    error: null,
  },
  logout: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_START:
      return {
        ...state,
        login: {
          isLoading: true,
          succes: null,
          data: [],
          error: null,
        },
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          succes: true,
          data: action.payload,
          error: null,
        },
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          succes: false,
          data: [],
          error: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        login: {
          isLoading: false,
          succes: null,
          data: null,
          error: null,
        },
      };

    default:
      return state;
  }
};
export default authReducer;
