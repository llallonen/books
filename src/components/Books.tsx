import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IBook } from "../../src/models/IBook";
import { useFetchAllBooksQuery } from "../service/apiService";
import { fetchBooks } from "../store/reducers/ActionCreators";
import { AppDispatch } from "../store/store";
import Book from "./Book";

const Books = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, data } = useFetchAllBooksQuery("fiction");
  const [ booksData, setBookData ] = useState([] as Array<IBook>);

  useEffect(() => {
    dispatch(fetchBooks);
    console.log(data?.items);
    if (data) {
      setBookData(data?.items);
    } else {
      console.log("gde dannye");
    }
  }, [data]);

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      <Flex wrap="wrap" justifyContent="space-between">
        {booksData &&
          booksData.map((item) => <Book bookData={item} key={item.id} />)}
      </Flex>
    </div>
  );
};

export default Books;
