import { UPDATE_MESSAGE, GET_MESSAGE } from "./actionTypes";

export const updateMessage = data => ({
  type: UPDATE_MESSAGE,
  payload: {
    data
  }
});

export const currentMessage = data => ({
  type: GET_MESSAGE,
  payload: {
    data
  }
});
