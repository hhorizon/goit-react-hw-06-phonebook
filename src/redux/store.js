import { createStore } from "redux";
import actionTypes from "./types";

const INITIAL_STATE = {
  value: 0,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return { value: state.value + payload };

    case actionTypes.DECREMENT:
      return { value: state.value - payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
