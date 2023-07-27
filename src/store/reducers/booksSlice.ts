import { createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../../models/IBooks";
import { fetchBooks } from "./actionCreators";

interface BooksState {
  books: IBooks;
  isLoading: boolean;
  error: string;
}

const initialState: BooksState = {
  books: {
    kind: "books#volumes",
    totalItems: 200,
    items: [],
  },
  isLoading: false,
  error: "",
};

const fetch = fetchBooks;

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "не удалось";
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addDefaultCase((state, action) => {
        console.log("ничего не происходит");
      });
  },
});

export default booksSlice.reducer;
