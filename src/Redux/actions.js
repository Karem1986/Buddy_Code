export const LOGIN = "LOGIN"
export function login(token) {
return {
  type: "LOGIN",
  payload: token
}
}