import { useState } from "react";
import Books from "./components/Books";
import Search from "./components/Search";
import { useFetchBooks } from "./hooks/useFetchBooks";
import CategorySelector from "./components/CategorySelector";

export type ICategory =
  | "All"
  | "Art"
  | "Biography"
  | "Computers"
  | "History"
  | "Medical"
  | "Poetry";

export type ISort = "Relevance" | "Newest";

export interface IQueryState {
  query: string;
  category: ICategory;
  sort: ISort;
}

const App = () => {
  const [searchValue, setSearchValue] = useState<IQueryState>({
    query: "pushkin",
    category: "Biography",
    sort: "Relevance",
  });

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (e.target) {
      setSearchValue((searchValue) => ({
        ...searchValue,
        query: e.target.value,
      }));
    }
  };

  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();

    if (e.target) {
      console.log(searchValue);
    }
  };

  const data = useFetchBooks(searchValue);

  return (
    <>
      <Search searchValue='pushkin' onChange={inputHandle} />
      <CategorySelector onChange={selectHandle} />
      <Books items={data.items} />
    </>
  );
};

export default App;
