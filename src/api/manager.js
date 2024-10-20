import axios from "~/axios";

export function login(username, password) {
  return axios.post("/xx/xx", {
    username,
    password,
  });
}

export function getInfo() {
  return axios.post("/xxx/xxx");
}

export function logout() {
  return axios.post("/xxx/xxx");
}
