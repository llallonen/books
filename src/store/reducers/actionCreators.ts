import axios from "axios";
import { AppDispatch } from "../store";
import { booksSlice } from "./booksSlice";

export const fetchBooks = async (dispatch: AppDispatch) => {
  try {
    dispatch(booksSlice.actions.booksFetching());
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction"
    );
    dispatch(booksSlice.actions.booksFetchingSucces(response.data));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(booksSlice.actions.booksFetchingError(e.message));
    }
  }
};
