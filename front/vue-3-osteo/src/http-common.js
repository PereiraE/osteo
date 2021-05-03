import axios from "axios";

export default axios.create({
  baseURL: "http://osteo.estebanpereira.fr/api",
  headers: {
    "Content-type": "application/json"
  }
});