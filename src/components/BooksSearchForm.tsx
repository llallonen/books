import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IQueryState } from "../models/IQueryState";
import { fetchBooks } from "../store/actionCreators./fetchBooks";
import { ISort } from "../models/ISort";
import { ICategory } from "../models/ICategory";
import { Button, Flex, FormControl } from "@chakra-ui/react";
import Search from "./Search";
import CategorySelector from "./CategorySelector";
import SortingSelector from "./SortingSelector";

const BooksSearchForm = () => {
  const [searchValue, setSearchValue] = useState<IQueryState>({
    query: "Hölderlin",
    category: "All",
    sort: "Relevance",
    index: 0,
  });

  const dispatch = useAppDispatch();

  // const booksData = useFetchBooks(searchValue);
  // const books = booksData.data;
  // const isLoading = booksData.isLoading;

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(searchValue);
    dispatch(fetchBooks(searchValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Search searchValue={searchValue.query} onChange={inputHandle} />
      </FormControl>
      <Flex>
        <FormControl>
          <CategorySelector onChange={catSelectHandle} />
        </FormControl>
        <FormControl>
          <SortingSelector onChange={sortSelectHandle} />
        </FormControl>
      </Flex>
      <Button type="submit">Searchh</Button>
    </form>
  );
};
export default BooksSearchForm;