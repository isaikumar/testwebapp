import axios from "axios";

export const loggIn = (userData) => {
  //fetch the data by using the axios
  return axios.get(`${process.env.REACT_APP_SERVER_URL}/api/login`, userData);
};
