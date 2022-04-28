const initialState = [
    {
      name: '',
      age: 0
    }
  ]
  
export default function user(state = initialState, action) {
    switch (action.type) {
      case 'EDIT_USER':
        return [
          ...state,
          {
            name: action.params.name,
            age: action.params.age
          }
        ]
  
      default:
        return state
    }
  }