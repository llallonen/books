import { IBooks } from "./IBooks";
import { IQueryState } from "./IQueryState";

export interface IBooksState {
  books: IBooks;
  isLoading: boolean;
  error: string;
  search: IQueryState;
}
