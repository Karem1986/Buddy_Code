const iniitalState = {
  authToken: null,
};

export default function loginReducer(state = iniitalState, action) {
  console.log('testing reducer action', action)
  switch(action.type) {
    // Check if user is logged in
    case "LOGIN" : {
      if (action.type === 'SET_AUTH_TOKEN') {
        return {...state, authToken: action.payload} //gives the token
      } else {
        return{...state} //user is not logged in 
      }
    }
    default: {
      return state
    }
  }
}
