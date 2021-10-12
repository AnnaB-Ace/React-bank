import { push } from "connected-react-router";
import {
  getStatesApi,
  deleteStateApi,
  getStateApi,
  editStateApi,
  createStateApi,
} from "../apis";
import {
  GET_STATES_START,
  GET_STATES_SUCCESS,
  GET_STATES_FAILURE,
  DELETE_STATE_SUCCESS,
  DELETE_STATE_START,
  DELETE_STATE_FAILURE,
  SHOW_DELETE_MODAL,
  GET_STATE_START,
  GET_STATE_FAILURE,
  GET_STATE_SUCCESS,
  EDIT_STATE_FAILURE,
  EDIT_STATE_START,
  EDIT_STATE_SUCCESS,
  CREATE_STATE_FAILURE,
  CREATE_STATE_START,
  CREATE_STATE_SUCCESS,
} from "../types";

// 1) trae la lista de estados

const getStatesStart = () => ({
  type: GET_STATES_START,
});

const getStatesSuccess = (data) => ({
  type: GET_STATES_SUCCESS,
  payload: data,
});

const getStatesFailure = (error) => ({
  type: GET_STATES_FAILURE,
  payload: error,
});

export const getStatesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getStatesStart());
      const resp = await getStatesApi();
      dispatch(getStatesSuccess(resp.data));
    } catch (err) {
      dispatch(getStatesFailure(err));
    }
  };
};

// 2)eliminar
const deleteStateStart = () => ({
  type: DELETE_STATE_START,
});

const deleteStateSuccess = () => ({
  type: DELETE_STATE_SUCCESS,
});

const deleteStateFailure = (error) => ({
  type: DELETE_STATE_FAILURE,
  payload: error,
});

export const deleteStateAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteStateStart());
      await deleteStateApi(id);
      dispatch(deleteStateSuccess());
      dispatch(showDeleteModalAction(false));
      dispatch(getStatesAction());
    } catch (err) {
      dispatch(deleteStateFailure(err));
    }
  };
};

export const showDeleteModalAction = (status) => ({
  type: SHOW_DELETE_MODAL,
  payload: status,
});

//4 trae la informacion por id de cada estado
const getStateStart = () => ({
  type: GET_STATE_START,
});

const getStateSuccess = (data) => ({
  type: GET_STATE_SUCCESS,
  payload: data,
});

const getStateFailure = (error) => ({
  type: GET_STATE_FAILURE,
  payload: error,
});

export const getStateByIdAction = (id) => async (dispatch) => {
  try {
    dispatch(getStateStart());
    const resp = await getStateApi(id);
    dispatch(getStateSuccess(resp.data));
  } catch (err) {
    dispatch(getStateFailure(err));
  }
};

//4) editar

const editStateStart = () => ({
  type: EDIT_STATE_START,
});

const editStateSuccess = () => ({
  type: EDIT_STATE_SUCCESS,
});

const editStateFailure = (error) => ({
  type: EDIT_STATE_FAILURE,
  payload: error,
});

export const editStateAction = (id, data) => async (dispatch) => {
  try {
    dispatch(editStateStart());
    await editStateApi(id, data);
    dispatch(editStateSuccess());
    dispatch(push("/states"));
  } catch (err) {
    dispatch(editStateFailure(err));
  }
};

// 5) crear un nuevo estado

const createStateStart = () => ({
  type: CREATE_STATE_START,
});

const createStateSuccess = () => ({
  type: CREATE_STATE_SUCCESS,
});

const createStateFailure = (error) => ({
  type: CREATE_STATE_FAILURE,
  payload: error,
});

export const createStateAction = (data) => async (dispatch) => {
  try {
    dispatch(createStateStart());
    await createStateApi(data);
    dispatch(createStateSuccess());
    console.log("se enviaron los datos correctamente");
    dispatch(push("/states"));
  } catch (err) {
    console.log("prueba");
    dispatch(createStateFailure("Error en el sistema, el estado ya existe."));
  }
};
