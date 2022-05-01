import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

// 创建和配置store存储
const store = configureStore({ reducer })

export default store