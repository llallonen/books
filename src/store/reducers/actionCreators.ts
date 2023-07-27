import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("An error occurred while loading books");
    }
  }
);
