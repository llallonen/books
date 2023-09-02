import { IBooks } from "./IBooks";

export interface IBooksState {
  books: IBooks;
  isLoading: boolean;
  error: string;
}
