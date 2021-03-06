import { all } from "redux-saga/effects";
import chatSagas from "../containers/Chat/sagas";
import authSagas from "../containers/Login/sagas";
import editMessage from "../containers/EditMessage/sagas";

export default function* rootSaga() {
  yield all([chatSagas(), authSagas(), editMessage()]);
}
