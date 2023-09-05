import {
  Badge,
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
  const bookData = data?.volumeInfo;
  const categories = data?.volumeInfo.categories;
  const description = bookData?.description
    ? bookData?.description
    : "Unfortunately there is no description for this book.";

  return (
    <div>
      <Card maxW={"80%"} m={[0, "auto"]}>
        <Flex
          alignItems={{ md: "center", lg: "flex-start" }}
          flexDirection={{ md: "column", lg: "row" }}
        >
          <CardHeader>
            <Image
              boxShadow="lg"
              p="6"
              rounded="md"
              bg="white"
              src={bookData?.imageLinks ? bookData?.imageLinks.thumbnail : ""}
              w={[100, 200, 300]}
            ></Image>
          </CardHeader>
          <CardBody>
            <Flex>
              {categories?.map((cat) => (
                <Badge key={cat}>{cat}</Badge>
              ))}
            </Flex>
            <Heading
              as="h1"
              size="xl"
              noOfLines={1}
              marginBottom={{ md: 3, lg: 10 }}
            >
              {bookData?.title}
            </Heading>
            <Heading
              as="h2"
              size="lg"
              fontWeight={400}
              noOfLines={1}
              marginBottom={{ md: 2, lg: 4 }}
            >
              {bookData?.authors}
            </Heading>
            <Text>
              {description}
            </Text>
          </CardBody>
        </Flex>
      </Card>
    </div>
  );
};

export default BookPage;
