import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga"; //NEW
import rootSaga from "./sagas/index"; //NEW

import chat from "./containers/Chat/reducer";
import auth from "./containers/Login/reducer";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware(); //NEW

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const reducers = {
  chat: chat,
  auth: auth
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  ...reducers
});

const store = createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(rootSaga); //NEW

export default store;
