import { ICategory } from "./ICategory";
import { ISort } from "./ISort";

export interface IQueryState {
  query: string;
  category: ICategory;
  sort: ISort;
  index: number;
}
