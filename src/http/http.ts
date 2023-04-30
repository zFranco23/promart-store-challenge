import axios from "axios";
import env from "../environment/environment";

const httpClient = axios.create({
  baseURL: env.baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;
