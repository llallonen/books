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
import { useDispatch } from "react-redux";

const BooksSearchForm = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, error, search } = useAppSelector(
    (state) => state.booksReducer
  );

  const [searchValue, setSearchValue] = useState<IQueryState>(search);

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
        <FormControl mb={5}>
          <CategorySelector onChange={catSelectHandle} />
        </FormControl>
        <FormControl>
          <SortingSelector onChange={sortSelectHandle} />
        </FormControl>
      </Flex>
      <Button type="submit" display='block' mx={'auto'} mt={6}>Search</Button>
    </form>
  );
};
export default BooksSearchForm;
