import * as types from '../constants'

const initialState = [
    {
      collapsed: false,
    }
  ]
  
export default function view(state = initialState, action) {
  console.log(action)
    switch (action.type) {
      case 'TOGGLE_COLLAPSED':
        return [
          ...state,
          {
            collapsed: !state.collapsed
          }
        ]
      default:
        return state
    }
  }