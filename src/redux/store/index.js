import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Fetchs } from "../reducer/Fetchs";
import { secondaryReducer } from "../reducer/secondaryReducer";

const rootReducer = combineReducers({
  fetchs: Fetchs,
  secondary: secondaryReducer,
});

const Store = configureStore({ reducer: rootReducer });
export default Store;
