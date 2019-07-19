import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga"; //NEW
import rootSaga from "./sagas/index"; //NEW

import chat from "./containers/Chat/reducer";
import auth from "./containers/Login/reducer";
import edit from "./containers/EditMessage/reducer";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware(); //NEW

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const reducers = {
  chat,
  auth,
  edit
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers
});

const store = createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(rootSaga); //NEW

export default store;
