import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use((response) => {
  return response;
});

export default api;
