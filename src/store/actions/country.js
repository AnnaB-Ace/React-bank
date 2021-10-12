import { push } from "connected-react-router";
import {
  deleteCountryApi,
  getCountriesApi,
  getCountryApi,
  createCountryApi,
  editCountryApi,
} from "../apis";
import {
  GET_COUNTRIES_START,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  DELETE_COUNTRIES_START,
  DELETE_COUNTRIES_SUCCESS,
  DELETE_COUNTRIES_FAILURE,
  SHOW_DELETE_MODAL_COUNTRY,
  GET_COUNTRY_START,
  GET_COUNTRY_FAILURE,
  GET_COUNTRY_SUCCESS,
  EDIT_COUNTRY_FAILURE,
  EDIT_COUNTRY_START,
  EDIT_COUNTRY_SUCCESS,
  CREATE_COUNTRY_SUCCESS,
  CREATE_COUNTRY_START,
  CREATE_COUNTRY_FAILURE,
} from "../types";

// 1) trae la lista de paises
const getCountriesStart = () => ({
  type: GET_COUNTRIES_START,
});

const getCountriesSuccess = (data) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: data,
});

const getCountriesFailure = (error) => ({
  type: GET_COUNTRIES_FAILURE,
  payload: error,
});

export const getCountriesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getCountriesStart());
      const resp = await getCountriesApi();
      dispatch(getCountriesSuccess(resp.data));
    } catch (err) {
      dispatch(getCountriesFailure(err));
    }
  };
};

//2) eliminar
const deleteCountryStart = () => ({
  type: DELETE_COUNTRIES_START,
});

const deleteCountrySuccess = () => ({
  type: DELETE_COUNTRIES_SUCCESS,
});
const deleteCountryFailure = (error) => ({
  type: DELETE_COUNTRIES_FAILURE,
  payload: error,
});

export const deleteCountryAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteCountryStart());
      await deleteCountryApi(id);
      dispatch(deleteCountrySuccess());
      dispatch(showDeleteModalActionCountry(false));
      dispatch(getCountriesAction());
    } catch (err) {
      dispatch(deleteCountryFailure(err));
    }
  };
};

export const showDeleteModalActionCountry = (status) => ({
  type: SHOW_DELETE_MODAL_COUNTRY,
  payload: status,
});

//4 trae la informacion por id de los paises
const getCountryStart = () => {
  return {
    type: GET_COUNTRY_START,
  };
};

const getCountrySuccess = (data) => {
  return {
    type: GET_COUNTRY_SUCCESS,
    payload: data,
  };
};

const getCountryFailure = (error) => {
  return {
    type: GET_COUNTRY_FAILURE,
    payload: error,
  };
};

export const getCountryByAction = (id) => async (dispatch) => {
  try {
    dispatch(getCountryStart());
    const resp = await getCountryApi(id);
    dispatch(getCountrySuccess(resp.data));
  } catch (err) {
    dispatch(getCountryFailure(err));
  }
};

//4) editar

const editCountryStart = () => ({
  type: EDIT_COUNTRY_START,
});

const editCountrySuccess = () => ({
  type: EDIT_COUNTRY_SUCCESS,
});

const editCountryFailure = (error) => ({
  type: EDIT_COUNTRY_FAILURE,
  payload: error,
});

export const editCountryAction = (id, data) => async (dispatch) => {
  try {
    dispatch(editCountryStart());
    await editCountryApi(id, data);
    dispatch(editCountrySuccess());
    dispatch(push("/countries"));
  } catch (err) {
    dispatch(editCountryFailure(err));
  }
};

// 5) crear un estado nuevo

const createCountryStart = () => ({
  type: CREATE_COUNTRY_START,
});

const createCountrySuccess = () => ({
  type: CREATE_COUNTRY_SUCCESS,
});

const createCountryFailure = (error) => ({
  type: CREATE_COUNTRY_FAILURE,
  payload: error,
});

export const createCountryAction = (data) => async (dispatch) => {
  try {
    dispatch(createCountryStart());
    await createCountryApi(data);
    dispatch(createCountrySuccess());
    dispatch(push("/countries"));
  } catch (err) {
    console.log("aqui");
    dispatch(createCountryFailure("Error en el sistema, el pais ya existe."));
  }
};
