//Not needed, unless we create more states 
import {combineReducers } from "redux"
import loginReducer from "./reducer"
export default combineReducers({
  login: loginReducer
})