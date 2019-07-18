import {
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from "./actionTypes";

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS: {
      const { messages, loading } = action.payload;
      return {
        ...state,
        messages,
        loading
      };
    }
    case FETCH_MESSAGES_FAIL: {
      const { messages, loading } = action.payload;
      return {
        ...state,
        messages,
        loading
      };
    }
    case FETCH_USERS_SUCCESS: {
      const { users, loading } = action.payload;
      return {
        ...state,
        users,
        loading
      };
    }
    case FETCH_USERS_FAIL: {
      const { users, loading } = action.payload;
      return {
        ...state,
        users,
        loading
      };
    }
    default:
      return state;
  }
};
