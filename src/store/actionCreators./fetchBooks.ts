import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IQueryState } from "../../models/IQueryState";
import { AppDispatch, setupStore } from "../store";
import { IBooksState } from "../../models/IBooksState";

interface IThunkApi {
  dispatch: AppDispatch,
  state: IBooksState,
}

export const fetchBooks = createAsyncThunk(
  "books",
  async (searchValue: IQueryState, thunkAPI) => {
    const { query, category, sort, index } = searchValue;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${category}&maxResults=4&startIndex=${index}&orderBy=${sort}&key=AIzaSyBDZDLot0OEknmVG638R9TeXTAO7M1CvPs`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить книги");
    }
  }
);
