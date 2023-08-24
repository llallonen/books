import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { IBooks } from "../models/IBooks";
import { IQueryState } from "../models/IQueryState";
import { useFetchAllBooksQuery } from "../service/apiService";

interface IUseFetchBooksReturnValue {
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
  data?: IBooks;
}

export const useFetchBooks = (
  query: IQueryState
): IUseFetchBooksReturnValue => {
  const { isLoading, error, data } = useFetchAllBooksQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  if (data) {
    return { isLoading, error, data };
  }

  return {
    isLoading,
    error,
    data,
  };
};
