import { Flex } from "@chakra-ui/react";
import { IBook } from "../models/IBook";
import Book from "./Book";
import Error from "./Error";

interface IBooksProps {
  items: Array<IBook>
}

const Books = (props: IBooksProps) => {
  const books = props.items;
  console.log(books)

  return (
    <div>
      <Flex wrap="wrap" justifyContent="space-between">
        {books.length > 0 &&
          books.map((item) => <Book bookData={item} key={item.id} />)}
      </Flex>
    </div>
  );
};

export default Books;
