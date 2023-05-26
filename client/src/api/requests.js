import { baseUrl } from "./base_url";
import axios from "axios";

export const getCards = async () => {
  return await axios
    .get(baseUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getCategories = async () => {
  return await axios
    .get(`${baseUrl}/category`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createUser = async (formData) => {
  await axios
    .post(`${baseUrl}/user/signup`, formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
export const getUsers = async () => {
  return await axios
    .get(`${baseUrl}/user`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const loginUser = async (user) => {
  return await axios.post(`${baseUrl}/user/login`, user);
};
export const logOutUser = async () => {
  return await axios.get(`${baseUrl}/user/logout`);
};
export const deleteUserById = async (id) => {
  return await axios.delete(`${baseUrl}/user/${id}`);
};
