import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { IBook } from "../models/IBook";
import { IBooks } from "../models/IBooks";

export const bookApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/'}),
    tagTypes: ['Book'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IBooks, string>({
            query: (query: string = 'subject:fiction') => ({
                url: `/v1/volumes`,
                params: {
                    q: query
                }
            })
        })
    }),
})
