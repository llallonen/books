import { IBook } from "./IBook";

export interface IBooks {
    kind: string,
    totalItems: number,
    items: IBook[],
}