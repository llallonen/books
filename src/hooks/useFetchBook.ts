import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { IBook } from "../models/IBook";
import {
    useFetchAOneBookQuery
} from "../service/apiService";

interface IUseFetchOneBookReturnValue {
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
  data?: IBook;
}

export const useFetchAOneBook = (query: string): IUseFetchOneBookReturnValue => {
  const { isLoading, error, data } = useFetchAOneBookQuery(query);

  if (data) {
    console.log(data)
    return { isLoading, error, data };
  }

  return {
    isLoading,
    error,
    data,
  };
};
