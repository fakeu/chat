import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_USER_SUCCESS, IS_USER_LOGIN } from "./actionTypes";

export function* loginUser(action) {
  const data = action.payload.data;
  try {
    const status = yield call(
      axios.post,
      `http://localhost:3005/auth/login`,
      data
    );
    localStorage.setItem("token", status.data.token);
    localStorage.setItem("login", status.data.login);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: { auth: status.data.auth, user: status.data }
    });
  } catch (error) {
    console.log("updateUser error:", error.message);
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* isLoggin(action) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("login");
  const status = token ? true : false;
  try {
    const currentUser = yield call(
      axios.get,
      `http://localhost:3005/api/user/${user}`
    );
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: { auth: status, user: currentUser.data }
    });
  } catch (error) {
    console.log("updateUser error:", error.message);
  }
}

function* watchILoggin() {
  yield takeEvery(IS_USER_LOGIN, isLoggin);
}

export default function* authSagas() {
  yield all([watchLoginUser(), watchILoggin()]);
}
