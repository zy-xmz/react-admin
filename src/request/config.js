/* 
    @description 请求配置
    @date 2022-04-25
*/
import axios from 'axios'

// Set config defaults when creating the instance
const $http = axios.create({
    baseURL: '',
    timeout: 2500,
    headers: {
        common: {
          Authorization: ''
        },
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
  })  

// Add a request interceptor
$http.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
$http.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response)
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject('获取数据失败')
    }
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default $http