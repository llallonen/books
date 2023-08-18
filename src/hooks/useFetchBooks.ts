import { IQueryState } from "../App";
import { IBooks } from "../models/IBooks";
import { useFetchAllBooksQuery } from "../service/apiService";

export const useFetchBooks = (query: IQueryState) => {
  const { isLoading, error, data } = useFetchAllBooksQuery(query);

  if (data) {
    return data;
  }

  return {
    items: {},
    kind: "",
    totalItems: 0,
  } as IBooks;
};
