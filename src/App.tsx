import { useState } from "react";
import Books from "./components/Books";
import Search from "./components/Search";
import { useFetchBooks } from "./hooks/useFetchBooks";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("fire");

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target) {
      setSearchValue(e.target.value);
    }
  };

  const data = useFetchBooks(searchValue);

  return (
    <>
      <Search searchValue={searchValue} onChange={inputHandle} />
      <Books items={data.items} />
    </>
  );
};

export default App;