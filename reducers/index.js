import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

//reducer (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state; //return값이 undefined 되므로 꼭 넣어주기!
    }
  }, //HYDRATE위해서 reducer추가
  user,
  post,
});

export default rootReducer;
