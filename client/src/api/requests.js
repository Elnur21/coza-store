// import nextId from "react-id-generator";
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
