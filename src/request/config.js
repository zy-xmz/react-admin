/* 
    @description 请求配置
    @date 2022-04-25
*/
import axios from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: '',
    timeout: 2500,
    headers: {
        common: {
            Authorization: AUTH_TOKEN
        },
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
  })  

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
