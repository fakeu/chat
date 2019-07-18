import {
  FETCH_MESSAGES,
  FETCH_USERS,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE
} from "./actionTypes";

export const fetchMessages = () => ({
  type: FETCH_MESSAGES
});

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const addMessage = data => ({
  type: ADD_MESSAGE,
  payload: {
    data
  }
});

export const deleteMessage = data => ({
  type: DELETE_MESSAGE,
  payload: {
    data
  }
});

export const updateMessage = data => ({
  type: UPDATE_MESSAGE,
  payload: {
    data
  }
});
