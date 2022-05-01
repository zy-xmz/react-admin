import * as types from '../constants'

export const editUser = params => ({ type: types.EDIT_USER, params })
export const toggleCollapsed = () => ({ type: types.TOGGLE_COLLAPSED })