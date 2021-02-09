const iniitalState = {
  authToken: null,
};

export default function loginReducer(state = iniitalState, action) {
  console.log('testing reducer action', action)
  switch(action.type) {
    // Check if user is logged in
    case "LOGIN" : {
      if (action.type === 'SET_AUTH_TOKEN') {
        return {...state, authToken: action.payload}
      }
    }
    default: {
      return state
    }
  }
}
