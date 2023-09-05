import { Select } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

const CategorySelector = ({onChange}: {onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void}) => {
  const categories = [
    { name: "All", value: "" },
    { name: "Art", value: "Art" },
    { name: "Biography", value: "Biography" },
    { name: "Computers", value: "Computers" },
    { name: "History", value: "History" },
    { name: "Medical", value: "Medical" },
    { name: "Poetry", value: "Poetry" },
  ];

  return (
    <Select placeholder="Select option" onChange={onChange}>
      {categories.map((category) => (
        <option value={category.value} key={category.name}>{category.name}</option>
      ))}
    </Select>
  );
};

export default CategorySelector;
