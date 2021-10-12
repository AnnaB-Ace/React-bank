import { modifyCountry } from "../../utils";
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
  CREATE_COUNTRY_FAILURE,
  CREATE_COUNTRY_START,
  CREATE_COUNTRY_SUCCESS,
} from "../types";

const initialState = {
  getCoutries: {
    isLoading: false,
    success: null,
    data: [],
    error: null,
  },
  getCountry: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
  },
  createCountry: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
  },
  deleteCountry: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
    showDeleteModalCountry: false,
  },
  updateCountry: {
    isLoading: false,
    success: null,
    data: null,
    error: null,
  },
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COUNTRY_START:
      return {
        ...state,
        createCountry: modifyCountry(true, null, null, null),
      };
    case CREATE_COUNTRY_SUCCESS:
      return {
        ...state,
        createCountry: modifyCountry(false, true, null, null),
      };
    case CREATE_COUNTRY_FAILURE:
      return {
        ...state,
        createCountry: modifyCountry(false, false, null, action.payload),
      };
    case EDIT_COUNTRY_START:
      return {
        ...state,
        updateCountry: modifyCountry(true, null, null, null),
      };
    case EDIT_COUNTRY_SUCCESS:
      return {
        ...state,
        updateCountry: modifyCountry(false, true, null, null),
      };
    case EDIT_COUNTRY_FAILURE:
      return {
        ...state,
        updateCountry: modifyCountry(false, false, null, action.payload),
      };
    case GET_COUNTRY_START:
      return {
        ...state,
        getCountry: modifyCountry(true, null, null, null),
      };
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        getCountry: modifyCountry(false, true, action.payload, null),
      };
    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        getCountry: modifyCountry(false, false, null, action.payload),
      };
    case GET_COUNTRIES_START:
      return {
        ...state,
        getCoutries: modifyCountry(true, null, [], null),
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        getCoutries: modifyCountry(false, true, action.payload, null),
      };
    case GET_COUNTRIES_FAILURE:
      return {
        ...state,
        getCoutries: modifyCountry(false, false, [], action.payload),
      };
    case DELETE_COUNTRIES_START:
      return {
        ...state,
        deleteCountry: {
          ...state.deleteCountry,
          ...modifyCountry(true, null, null, null),
        },
      };
    case DELETE_COUNTRIES_SUCCESS:
      return {
        ...state,
        deleteCountry: {
          ...state.deleteCountry,
          ...modifyCountry(false, true, null, null),
        },
      };
    case DELETE_COUNTRIES_FAILURE:
      return {
        ...state,
        deleteCountry: {
          ...state.deleteCountry,
          ...modifyCountry(false, false, null, action.payload),
        },
      };
    case SHOW_DELETE_MODAL_COUNTRY:
      return {
        ...state,
        deleteCountry: {
          ...state.deleteCountry,
          showDeleteModalCountry: action.payload,
        },
      };

    default:
      return state;
  }
};

export default countryReducer;

// como funciona redux
//1) creamos una funcion reducer, que va a tener un stateInitial y una action
// el initialState={estado inicial de mi reducer}
// creamos una fucion reducer que vamos a disparar para que ese estado inicial Cambie
//la funcion reducer tiene todas las distintas operaciones necesarias para cambiar el estado y para que ejecute es por medio de una accion
// la accion es una funcion que contiene un action y un payload
