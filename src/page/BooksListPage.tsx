import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import Books from "../components/Books";
import BooksSearchForm from "../components/BooksSearchForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchBooks } from "../store/actionCreators./fetchBooks";

const BooksListPage = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, error, search } = useAppSelector(
    (state) => state.booksReducer
  );

  const moreBtnHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchBooks({query: 'Hegel', category: 'Poetry', sort: 'Relevance', index: 1}));
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
