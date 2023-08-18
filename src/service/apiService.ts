import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBooks } from "../models/IBooks";
import { ICategory, ISort } from "../App";

export const bookApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/" }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    fetchAllBooks: build.query<
      IBooks,
      { query: string; category: ICategory; sort: ISort }
    >({
      query: ({
        query,
        category,
        sort,
      }: {
        query: string;
        category: ICategory;
        sort: string;
      }) => `v1/volumes?q=${query}+subject:${category}&orderBy=${sort}`,
    }),
  }),
});

export const { useFetchAllBooksQuery } = bookApi;
