import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useFetchAOneBook } from "../hooks/useFetchBook";

const BookPage = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const { data, isLoading, error } = useFetchAOneBook(path);

  return (
    <div>
      <Card>
        <Flex>
          <CardHeader>
            <Heading as="h1" size="xl" noOfLines={1}>
              {data?.volumeInfo.title}
            </Heading>
            <Heading as="h2" size="lg" noOfLines={1}>
              {data?.volumeInfo.authors}
            </Heading>
            <Image
              src={data?.volumeInfo.imageLinks ? data?.volumeInfo.imageLinks.thumbnail : ""}
            ></Image>
          </CardHeader>
          <CardBody>
            <Text>{data?.volumeInfo.description}</Text>
          </CardBody>
        </Flex>
      </Card>
    </div>
  );
};

export default BookPage;
