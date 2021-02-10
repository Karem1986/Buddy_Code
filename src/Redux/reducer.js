const iniitalState = {
  authToken: null,
};

export default function loginReducer(state = iniitalState, action) {
  console.log('testing reducer action', action)
  switch(action.type) {
    // Check if user is logged in
    case "LOGIN" : {
      console.log("action payload", action.payload)
      return {...state, authToken: action.payload}
    }
    default: {
      return state
    }
  }
}
