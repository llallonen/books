import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { bookApi } from "../service/apiService";
import booksReducer from "./reducers/booksSlice";

const rootReducer = combineReducers({
  booksReducer,
  [bookApi.reducerPath]: bookApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bookApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
