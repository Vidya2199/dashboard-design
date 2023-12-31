import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

export const DashboardAPIS = {
  getDetails: (param) => {
    return axios.get(API_BASE_URL + "/getData", param);
  },
};
