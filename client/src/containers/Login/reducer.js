import { LOGIN_USER_SUCCESS } from "./actionTypes";

export default (state = { auth: false }, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      const { auth, user } = action.payload;
      return {
        ...state,
        auth,
        user
      };
    }
    default:
      return state;
  }
};
