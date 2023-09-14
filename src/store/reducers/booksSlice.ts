import { createSlice } from "@reduxjs/toolkit";
import { IBooksState } from "../../models/IBooksState";
import { fetchBooks } from "../actionCreators./fetchBooks";
import { fetchMoreBooks } from "../actionCreators./fetchMoreBooks";

const initialState: IBooksState = {
  isLoading: false,
  books: {
    kind: "string",
    totalItems: 0,
    items: [],
  },
  error: "",
  search: { query: "", category: "Art", sort: "Relevance", index: 0 },
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        state.search = action.meta.arg;
      })
      .addCase(fetchBooks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "error";
      })
      .addCase(fetchMoreBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.search = action.meta.arg;
        state.books.items = [...state.books.items, ...action.payload.items];
      });
  },
});

export default booksSlice.reducer;
