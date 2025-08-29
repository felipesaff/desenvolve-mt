import axios from "axios";

const api = axios.create({
	baseURL: "https://abitus-api.geia.vip/v1",
	headers: {
		Accept: "application/json",
	},
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
