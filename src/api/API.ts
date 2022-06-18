import axios from "axios";
import {CONFIG} from "../config";

export default (url = CONFIG.API) => {
    const API = axios.create({
        baseURL: url,
    })

    API.interceptors.response.use(
        (config) => config,
        (error) => {
            if (!error.response) {
                throw error
            }
            if (error.response.status === 404) {
                throw error.response;
            }

            return Promise.reject(error);
        }
    )

    return API
}
