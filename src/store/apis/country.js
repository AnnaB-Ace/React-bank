import axios from "../../service/axios";
import { PATHS } from "../../constants/path";

export const getCountriesApi = async () => {
  return await axios({
    method: "get",
    url: `${PATHS.getCountries}`,
  });
};

export const getCountryApi = async (id) => {
  return await axios({
    method: "get",
    url: `${PATHS.getCountries}/${id}`,
  });
};

export const createCountryApi = async (data) => {
  return await axios({
    method: "post",
    url: `${PATHS.getCountries}`,
    data,
  });
};

export const editCountryApi = async (id, data) => {
  return await axios({
    method: "put",
    url: `${PATHS.getCountries}/${id}`,
    data,
  });
};

export const deleteCountryApi = async (id) => {
  return await axios({
    method: "delete",
    url: `${PATHS.getCountries}/${id}`,
  });
};
