import { LOGIN_USER, IS_USER_LOGIN } from "./actionTypes";

export const loginUser = data => ({
  type: LOGIN_USER,
  payload: {
    data
  }
});

export const isUserLoggin = data => ({
  type: IS_USER_LOGIN
});
