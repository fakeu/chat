import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  FETCH_MESSAGES_SUCCESS,
  UPDATE_MESSAGE,
  GET_MESSAGE,
  CURRENT_MESSAGE
} from "./actionTypes";

import { url } from "../../helpers";

export function* getMessage(action) {
  const data = action.payload.data;
  try {
    const message = yield call(axios.get, `${url}/api/message/${data}`);

    yield put({
      type: CURRENT_MESSAGE,
      payload: { message: message.data, loading: false }
    });
  } catch (error) {
    console.log("updateUser error:", error.message);
  }
}

function* watchGetMessage() {
  yield takeEvery(GET_MESSAGE, getMessage);
}

export function* updateMessage(action) {
  const data = action.payload.data;
  try {
    const messages = yield call(axios.put, `${url}/api/message`, data);

    yield put({
      type: FETCH_MESSAGES_SUCCESS,
      payload: { messages: messages.data, loading: false }
    });
  } catch (error) {
    console.log("updateUser error:", error.message);
  }
}

function* watchUpdateMessage() {
  yield takeEvery(UPDATE_MESSAGE, updateMessage);
}

export default function* editMessage() {
  yield all([watchUpdateMessage(), watchGetMessage()]);
}
