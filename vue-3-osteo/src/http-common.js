import axios from "axios";

const token = localStorage.getItem('user-token');

export default axios.create({
  baseURL: "http://osteo.estebanpereira.fr/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer '+token
  }
});