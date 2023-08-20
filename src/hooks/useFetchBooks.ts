import { SerializedError } from "@reduxjs/toolkit";
import { IQueryState } from "../App";
import { IBooks } from "../models/IBooks";
import { useFetchAllBooksQuery } from "../service/apiService";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

interface IUseFetchBooksReturnValue {
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
  data?: IBooks;
}

export const useFetchBooks = (query: IQueryState): IUseFetchBooksReturnValue => {
  const { isLoading, error, data } = useFetchAllBooksQuery(query);

  if (data) {
    return { isLoading, error, data };
  }

  return {
    isLoading,
    error,
    data
  }
};
