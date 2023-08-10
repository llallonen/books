import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBooks } from "../models/IBooks";

export const bookApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/" }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    fetchAllBooks: build.query<IBooks, string>({
      query: (query: string = "subject:fiction") => ({
        url: `/v1/volumes`,
        params: {
          q: query,
        },
      }),
    }),
    fetchBySearch: build.query({
      query: (search: string = 'pushkin') => ({
        url: `/v1/volumes`,
        params: {
            q: search
        }
      }),
    }),
  }),
});


export const { useFetchAllBooksQuery, useFetchBySearchQuery } = bookApi