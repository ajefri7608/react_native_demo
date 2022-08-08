import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { axiosConfig } from "./axiosConfig";

const axios = require('axios');

const axiosInstance = axios.create(axiosConfig);
  
axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  }, function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance