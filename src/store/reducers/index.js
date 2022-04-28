import { combineReducers } from 'redux'
import user from './user'
import view from './view'

const rootReducer = combineReducers({
    user,
    view
})

export default rootReducer