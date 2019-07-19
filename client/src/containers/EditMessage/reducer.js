import { FETCH_MESSAGES_SUCCESS, CURRENT_MESSAGE } from "./actionTypes";

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
    case CURRENT_MESSAGE: {
      const { message, loading } = action.payload;
      return {
        ...state,
        message,
        loading
      };
    }
    default:
      return state;
  }
};
