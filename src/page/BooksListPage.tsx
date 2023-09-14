import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import Books from "../components/Books";
import BooksSearchForm from "../components/BooksSearchForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchMoreBooks } from "../store/actionCreators./fetchMoreBooks";

const BooksListPage = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, error, search } = useAppSelector(
    (state) => state.booksReducer
  );

  const moreBtnHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchMoreBooks({ ...search, index: search.index + 4 }));
    console.log(search);
  };

  return (
    <>
      <BooksSearchForm />
      {isLoading && <Spinner />}
      <Box px={5}>{books && <Books items={books.items} />}</Box>
      <Flex justifyContent="center">
        <Button colorScheme="blue" onClick={moreBtnHandle}>
          Load more
        </Button>
      </Flex>
    </>
  );
};

export default BooksListPage;
