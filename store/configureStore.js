import { createWrapper } from "next-redux-wrapper";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore1 = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) //배포용일 경우
      : composeWithDevTools(applyMiddleware(...middlewares)); //배포용이 아닐경우에만 devtool연결
  const store = configureStore({ reducer, enhancer });

  //dispatch하는 순간 type, data가 reducer로 전달됨
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "boogicho",
  });
  return store;
};

const wrapper = createWrapper(configureStore1, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
