import * as types from '../constants'

const initialState = {
  collapsed: false,
}
  
export default function view(state = initialState, action) {
  console.log(action, state.collapsed)
    switch (action.type) {
      case types.TOGGLE_COLLAPSED:
        return { collapsed: !state.collapsed }
      default:
        return state
    }
  }