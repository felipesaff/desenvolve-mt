import axios from "axios";

axios.defaults.baseURL = "https://abitus-api.geia.vip/v1";
axios.defaults.headers.common.Accept = "application/json";

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error);
	}
);
