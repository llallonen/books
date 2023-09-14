import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IBook } from "../models/IBook";

interface BookProps {
  bookData: IBook;
}

const Book: FC<BookProps> = ({ bookData }) => {
  const book = bookData.volumeInfo;
  const bg = useColorModeValue("gray.100", "gray.600");
  const title = book.title;
  const authors = book.authors;

  return (
    <Card className="book" w="22%" h="320px" bg={bg} alignItems="center" my={5}>
      <Link to={`${bookData.id}`} relative="path">
        <CardHeader px={[5, 2]}>
          <Image
            w={"max"}
            h={170}
            margin={[0, "auto"]}
            src={book.imageLinks ? book.imageLinks.thumbnail : ""}
            alt={book.title}
            borderRadius="lg"
          />
        </CardHeader>
        <CardBody height={"30%"} p={0} textAlign={'center'}>
            <Heading as="h2" size="md" p={0} h={'55%'} textAlign={"center"} mb={3} className="card__title">
              {title}
            </Heading>
            <Text p={0} color="gray.600" fontWeight={2} h={'45%'} className="card__subtitle">
              {authors}
            </Text>
        </CardBody>
      </Link>
    </Card>
  );
};

export default Book;
