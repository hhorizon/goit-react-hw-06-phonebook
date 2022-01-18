import { combineReducers } from "redux";
import * as actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
