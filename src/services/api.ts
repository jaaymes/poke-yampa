import axios from "axios";
import { toast } from "../components/ui/toast";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 404:
        toast.error("Pokemon não encontrado");
        break;
      case 500:
      case 502:
      case 503:
      case 504:
        toast.error("Erro no servidor. Tente novamente mais tarde.");
        if (status === 500) {
          window.location.href = "/server-error";
        }
        break;
      case 0:
      case -1:
        toast.error("Erro de conexão. Verifique sua internet.");
        break;
      default:
        if (status >= 400) {
          toast.error("Algo deu errado. Tente novamente.");
        }
        break;
    }

    return Promise.reject(error);
  }
);

export default api;
