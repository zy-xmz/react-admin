const initialState = [
    {
      text: 'Use Redux',
      id: 0
    }
  ]
  
export default function view(state = initialState, action) {
    switch (action.type) {
      case 'EDIT_USER':
        return [
          ...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            text: action.text
          }
        ]
  
      default:
        return state
    }
  }