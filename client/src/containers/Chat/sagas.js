import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from "./actionTypes";

import { url } from "../../helpers";

export function* fetchMessages() {
  try {
    const messages = yield call(axios.get, `${url}/api/message`);
    yield put({
      type: FETCH_MESSAGES_SUCCESS,
      payload: { messages: messages.data, loading: false }
    });
  } catch (error) {
    yield put({
      type: FETCH_MESSAGES_FAIL,
      payload: { messages: [], loading: true }
    });
  }
}

function* watchFetchMessages() {
  yield takeEvery(FETCH_MESSAGES, fetchMessages);
}

export function* fetchUsers() {
  try {
    const users = yield call(axios.get, `${url}/api/user`);
    yield put({
      type: FETCH_USERS_SUCCESS,
      payload: { users: users.data, loading: false }
    });
  } catch (error) {
    yield put({
      type: FETCH_USERS_FAIL,
      payload: { users: [], loading: true }
    });
  }
}

function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

export function* addNewMessage(action) {
  const data = action.payload.data;
  try {
    const messages = yield call(axios.post, `${url}/api/message`, data);

    yield put({
      type: FETCH_MESSAGES_SUCCESS,
      payload: { messages: messages.data, loading: false }
    });
  } catch (error) {
    console.log("updateUser error:", error.message);
  }
}

function* watchAddNewMessage() {
  yield takeEvery(ADD_MESSAGE, addNewMessage);
}

export function* deleteMessage(action) {
  const data = action.payload.data;

  try {
    const messages = yield call(axios.delete, `${url}/api/message/${data}`);

    yield put({
      type: FETCH_MESSAGES_SUCCESS,
      payload: { messages: messages.data, loading: false }
    });
  } catch (error) {
    console.log("updateUser error:", error.message);
  }
}

function* watchDeleteMessage() {
  yield takeEvery(DELETE_MESSAGE, deleteMessage);
}

export default function* chatSagas() {
  yield all([
    watchFetchMessages(),
    watchFetchUsers(),
    watchAddNewMessage(),
    watchDeleteMessage()
  ]);
}
