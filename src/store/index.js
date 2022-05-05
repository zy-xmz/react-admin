import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
// import viewReducer from './reducers/view'

// 创建和配置store存储
const store = configureStore({ reducer })

export default store