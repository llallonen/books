import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

const Search = ({searchValue, onChange}:{searchValue: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void}) => {

  return <Input placeholder="Search..." value={searchValue} onChange={onChange} />;
};

export default Search;
