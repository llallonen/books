import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBooks } from "../models/IBooks";
import { ICategory } from "../models/ICategory";
import { ISort } from "../models/ISort";

export const bookApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/" }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    fetchAllBooks: build.query<
      IBooks,
      { query: string; category: ICategory; sort: ISort, index: number }
    >({
      query: ({
        query,
        category,
        sort,
        index
      }: {
        query: string;
        category: ICategory;
        sort: string;
        index: number
      }) => `v1/volumes?q=${query}+subject:${category}&maxResults=16&startIndex=${index}&orderBy=${sort}`,
      serializeQueryArgs: ({ endpointName }) => {
        console.log('hui')
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
  }),
});

export const { useFetchAllBooksQuery } = bookApi;
