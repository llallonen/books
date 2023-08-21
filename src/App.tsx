import { useState } from "react";
import Books from "./components/Books";
import Search from "./components/Search";
import { useFetchBooks } from "./hooks/useFetchBooks";
import CategorySelector from "./components/CategorySelector";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import SortingSelector from "./components/SortingSelector";

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
  index: number;
}

const App = () => {
  const [searchValue, setSearchValue] = useState<IQueryState>({
    query: "Pushkin",
    category: "Biography",
    sort: "Relevance",
    index: 0,
  });

  const data = useFetchBooks(searchValue);
  const booksData = data.data;
  const isLoading = data.isLoading;

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (e.target) {
      setSearchValue((searchValue) => ({
        ...searchValue,
        query: e.target.value,
      }));
    }
  };

  const catSelectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();

    if (e.target) {
      const value = e.target.value as ICategory;

      setSearchValue((searchValue) => ({
        ...searchValue,
        category: value,
      }));
    }
  };

  const sortSelectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    if (e.target) {
      const value = e.target.value as ISort;
      setSearchValue((searchValue) => ({
        ...searchValue,
        sort: value,
      }));
    }
  };

  const moreBtnHandle = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('click')
    setSearchValue((searchValue) => ({
      ...searchValue,
      index: searchValue.index + 16
    }));
  };

  return (
    <>
      <Search searchValue={searchValue.query} onChange={inputHandle} />
      <Flex>
        <CategorySelector onChange={catSelectHandle} />
        <SortingSelector onChange={sortSelectHandle} />
      </Flex>
      {isLoading && <Spinner />}
      {booksData && <Books items={booksData.items} />}
      <Flex justifyContent="center">
        <Button colorScheme="blue" onClick={moreBtnHandle}>Load more</Button>
      </Flex>
    </>
  );
};

export default App;
