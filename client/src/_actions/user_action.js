import { LOGIN_USER, REGIST_USER, LOGOUT_USER } from "../_types/types";
import Axios from "axios";

export const userLogin = function (data) {
  const request = Axios.post("/api/user/login", data).then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const userRegister = function (data) {
  const request = Axios.post("/api/user/register", data).then(
    (res) => res.data
  );
  return {
    type: REGIST_USER,
    payload: request,
  };
};

export const userLogout = function (data) {
  const request = Axios.post("/api/user/logout", data).then((res) => res.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
};
