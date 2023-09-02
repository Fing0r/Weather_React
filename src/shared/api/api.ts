import axios from "axios";

import { CONFIG } from "@/shared/const/config";

export const $api = axios.create({
    baseURL: CONFIG.API,
});

$api.interceptors.response.use(
    (config) => config,
    (error) => {
        if (!error.response) {
            throw error;
        }
        if (error.response.status === 404) {
            throw error.response;
        }

        return Promise.reject(error);
    },
);
