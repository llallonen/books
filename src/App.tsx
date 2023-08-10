import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchBooks } from "./store/reducers/ActionCreators";
import Books from "./components/Books";

const App = () => {
const { books } = useAppSelector((state) => state.booksReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks)
  }, [])

  return (
    <>
      <Books />
    </>
  );
};

export default App;
