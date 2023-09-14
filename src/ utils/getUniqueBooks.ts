import { IBook } from "../models/IBook";
import { IBooks } from "../models/IBooks";

export function getUnique(arr: IBook[]) {
  return arr.reduce((newArray: IBook[], currObj) => {
    if (!newArray.some((obj) => obj.id === currObj.id)) {
      newArray.push(currObj);
    }
    return newArray;
  }, []);
}
