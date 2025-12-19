import axios from "axios";

const baseApi = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

baseApi.interceptors.request.use(async (config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

baseApi.interceptors.response.use((response) => {
    if (response) {
        return response.data;
    }
    return response;
}, (error) => {
    console.error("API error", error.message);
    throw error;
})

export default baseApi;
