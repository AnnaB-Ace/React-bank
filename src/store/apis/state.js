import axios from "../../service/axios";
import { PATHS } from "../../constants/path";

export const getStatesApi = async () => {
  return await axios({
    method: "get",
    url: `${PATHS.getStates}`,
  });
};

export const getStateApi = async (id) => {
  return await axios({
    method: "get",
    url: `${PATHS.getStates}/${id}`,
  });
};

export const createStateApi = async (data) => {
  return await axios({
    method: "post",
    url: `${PATHS.getStates}`,
    data,
  });
};

export const editStateApi = async (id, data) => {
  return await axios({
    method: "put",
    url: `${PATHS.getStates}/${id}`,
    data,
  });
};

export const deleteStateApi = async (id) => {
  return await axios({
    method: "delete",
    url: `${PATHS.getStates}/${id}`,
  });
};
