import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { bookApi } from "../services/bookService";
import Book from "./Book";

const Books = () => {
  const [limit, setLimit] = useState(50);
  const {
    data: booksData,
    error,
    isLoading,
  } = bookApi.useFetchAllPostsQuery("subject:fiction");
  const books = booksData?.items;

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      <Flex wrap="wrap" gap="auto">
        {books && books.map((item) => <Book bookData={item} />)}
      </Flex>
    </div>
  );
};

export default Books;
