export const LOGIN = "LOGIN"
export const SIGNUP = "SIGNUP"

export function login(token) {
return {
  type: "LOGIN",
  payload: token
}
}
export function signup(token) {
  return {
    type: "SIGNUP",
    payload: token
  }
  }