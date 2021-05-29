import { LOGIN_USER, REGIST_USER, LOGOUT_USER } from "../_types/types";

export default function (state = {}, actions) {
  switch (actions.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: actions.payload,
      };
    case REGIST_USER:
      return {
        ...state,
        registerSuccess: actions.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logoutSuccess: actions.payload,
      };
    default:
      return state;
  }
}
