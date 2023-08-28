import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { IBook } from "../models/IBook";
import { IBooks } from "../models/IBooks";
import { ICategory } from "../models/ICategory";
import { ISort } from "../models/ISort";

export const bookApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/" }),
  tagTypes: ["Book"],
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    fetchAllBooks: build.query<
      IBooks,
      { query: string; category: ICategory; sort: ISort; index: number }
    >({
      query: ({
        query,
        category,
        sort,
        index,
      }: {
        query: string;
        category: ICategory;
        sort: string;
        index: number;
      }) =>
        `v1/volumes?q=${query}+subject:${category}&maxResults=8&startIndex=${index}&orderBy=${sort}`,
      serializeQueryArgs: ({ queryArgs }) => {
        const { query, category, sort } = queryArgs;
        return { query, category, sort };
      },
      merge: (currentCache: IBooks, newItems: IBooks) => {
        currentCache.items.push(...newItems.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    fetchAOneBook: build.query<IBook, string>({
      query: (bookId: string) => `v1/volumes/${bookId}`,
    }),
  }),
});

export const { useFetchAllBooksQuery, useFetchAOneBookQuery } = bookApi;
