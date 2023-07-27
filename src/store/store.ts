import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { bookApi } from "../services/bookService";
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
