import axios from 'axios';

const BASE_URL = 'https://5.react.pages.academy/wtw';

const REQUEST_TIME = 5000;

export const createAPI = (onUnauthorized) => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: REQUEST_TIME,
        withCredentials: true,
    });

    const onSuccess = (response) => response;

    const onError = (err) => {
        const { response } = err;
        console.log(err)
        if (response.status === 401) {
            onUnauthorized();
            throw err;
        }
        throw err;
    };

    api.interceptors.response.use(onSuccess, onError);
    return api;
};