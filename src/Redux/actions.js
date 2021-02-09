export const LOGIN = "LOGIN"
export function login(isloggedIn) {
return {
  type: "LOGIN",
  payload: isloggedIn
}
}