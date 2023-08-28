import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import Books from "../components/Books";
import CategorySelector from "../components/CategorySelector";
import Search from "../components/Search";
import SortingSelector from "../components/SortingSelector";
import { useFetchBooks } from "../hooks/useFetchBooks";
import { ICategory } from "../models/ICategory";
import { IQueryState } from "../models/IQueryState";
import { ISort } from "../models/ISort";

const BooksListPage = () => {
  const [searchValue, setSearchValue] = useState<IQueryState>({
    query: "Pushkin",
    category: "Biography",
    sort: "Relevance",
    index: 0,
  });

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(e.target.value)
    if (e.target) {
      setSearchValue((searchValue) => ({
        ...searchValue,
        query: e.target.value,
      }));
    }
  };

  const catSelectHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    console.log('category')
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
    console.log('sort')
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
    setSearchValue((searchValue) => ({
      ...searchValue,
      index: searchValue.index + 8,
    }));
  };

  const data = useFetchBooks(searchValue);
  const booksData = data.data;
  const isLoading = data.isLoading;

  return (
    <>
      <Search searchValue={searchValue.query} onChange={inputHandle} />
      <Flex>
        <CategorySelector onChange={catSelectHandle} />
        <SortingSelector onChange={sortSelectHandle} />
      </Flex>
      {isLoading && <Spinner />}
      <Box px={5}>

      {booksData && <Books items={booksData.items} />}
      </Box>
      <Flex justifyContent="center">
        <Button colorScheme="blue" onClick={moreBtnHandle}>
          Load more
        </Button>
      </Flex>
    </>
  );
};


export default BooksListPage;