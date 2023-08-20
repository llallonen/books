import { Select } from '@chakra-ui/react';
import React from 'react'

const SortingSelector = ({onChange}: {onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void}) => {
    const sorts = [
        "Relevance",
        "Newest"
      ];
    
      return (
        <Select placeholder="Select option" onChange={onChange}>
          {sorts.map((category) => (
            <option value={category} key={category}>{category}</option>
          ))}
        </Select>
      );
}

export default SortingSelector