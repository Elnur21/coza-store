import nextId from "react-id-generator";
import { baseUrl } from "./base_url";
import { userData } from "../data/data";

export const fetchData = async () => {
  try {
    const response = await fetch(baseUrl);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};
