import { FC } from "react";
import { IBook } from "../models/IBook";
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

interface BookProps {
  bookData: IBook;
}

const Book: FC<BookProps> = ({ bookData }) => {
  const book = bookData.volumeInfo;
  const bg = useColorModeValue("gray.100", "gray.600");

  return (
    <Card className="book" w="22%" h='400px' bg={bg} alignItems="center">
      <CardHeader>
        <Heading size="md">{book.title}</Heading>
      </CardHeader>
      <CardBody>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Heading as="h2" size="md" color="blue.600">
            {book.authors}
          </Heading>
          <Image
            display={"flex"}
            w={"max"}
            h={250}
            src={book.imageLinks.thumbnail}
            alt={book.title}
            borderRadius="lg"
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Book;
