import { modifyState } from "../../utils";
import {
  GET_STATES_START,
  GET_STATES_SUCCESS,
  GET_STATES_FAILURE,
  DELETE_STATE_FAILURE,
  DELETE_STATE_START,
  DELETE_STATE_SUCCESS,
  SHOW_DELETE_MODAL,
  GET_STATE_START,
  GET_STATE_FAILURE,
  GET_STATE_SUCCESS,
  EDIT_STATE_FAILURE,
  EDIT_STATE_START,
  EDIT_STATE_SUCCESS,
  CREATE_STATE_START,
  CREATE_STATE_SUCCESS,
  CREATE_STATE_FAILURE,
} from "../types";

const initialState = {
  getStates: {
    isLoading: false,
    success: null,
    data: [],
    error: null,
  },
  getState: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
  },
  createState: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
  },
  deleteState: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
    showDeleteModal: false,
  },
  updateState: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
  },
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STATE_START:
      return {
        ...state,
        createState: modifyState(true, null, null, null),
      };
    case CREATE_STATE_SUCCESS:
      return {
        ...state,
        createState: modifyState(false, true, null, null),
      };
    case CREATE_STATE_FAILURE:
      return {
        ...state,
        createState: modifyState(false, false, null, action.payload),
      };
    case EDIT_STATE_START:
      return {
        ...state,
        updateState: modifyState(true, null, null, null),
      };
    case EDIT_STATE_SUCCESS:
      return {
        ...state,
        updateState: modifyState(false, true, null, null),
      };
    case EDIT_STATE_FAILURE:
      return {
        ...state,
        updateState: modifyState(false, false, null, action.payload),
      };
    case GET_STATE_START:
      return {
        ...state,
        getState: modifyState(true, null, null, null),
      };
    case GET_STATE_SUCCESS:
      return {
        ...state,
        getState: modifyState(false, true, action.payload, null),
      };
    case GET_STATE_FAILURE:
      return {
        ...state,
        getState: modifyState(false, false, null, action.payload),
      };
    case GET_STATES_START:
      return {
        ...state,
        getStates: modifyState(true, null, [], null),
      };
    case GET_STATES_SUCCESS:
      return {
        ...state,
        getStates: modifyState(false, true, action.payload, null),
      };
    case GET_STATES_FAILURE:
      return {
        ...state,
        getStates: modifyState(false, false, [], action.payload),
      };
    case DELETE_STATE_START:
      return {
        ...state,
        deleteState: {
          ...state.deleteState,
          ...modifyState(true, null, null, null),
        },
      };
    case DELETE_STATE_SUCCESS:
      return {
        ...state,
        deleteState: {
          ...state.deleteState,
          ...modifyState(false, true, null, null),
        },
      };
    case DELETE_STATE_FAILURE:
      return {
        ...state,
        deleteState: {
          ...state.deleteState,
          ...modifyState(false, false, null, action.payload),
        },
      };
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        deleteState: {
          ...state.deleteState,
          showDeleteModal: action.payload,
        },
      };
    default:
      return state;
  }
};

export default stateReducer;
