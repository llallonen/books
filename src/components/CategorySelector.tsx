import { Select } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

const CategorySelector = ({onChange}: {onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void}) => {
  const categories = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];

  return (
    <Select placeholder="Select option" onChange={onChange}>
      {categories.map((category) => (
        <option value={category} key={category}>{category}</option>
      ))}
    </Select>
  );
};

export default CategorySelector;
