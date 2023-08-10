import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../models/IBooks";

interface BooksState {
  books: IBooks;
  isLoading: boolean;
  error: string;
}

const initialState: BooksState = {
  isLoading: false,
  books: {
    kind: "string",
    totalItems: 0,
    items: [],
  },
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksFetching(state) {
      state.isLoading = true;
    },
    booksFetchingSucces(state, action: PayloadAction<IBooks>) {
      state.isLoading = false;
      state.error = '';
      state.books = action.payload;
    },

    booksFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;
