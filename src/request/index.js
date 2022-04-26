/* 
    @description 封装的请求函数
    @date 2022-04-25
*/
import $http from "./config"
import { apiList } from './api'

// 封装请求函数
export const request = function (name, params) {
    const index = apiList.findIndex(item => item.name === name)
    const { url, method } = apiList[index]
    let requestObj = { url, method }
    if (params) {
        if (method === 'GET') {
            requestObj.params = params
        } else if (method === 'POST') {
            requestObj.data = params
        }
    }
    return $http(requestObj)
}
