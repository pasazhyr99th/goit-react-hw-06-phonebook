import React from "react";
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contact by name
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterLabel>
);

export default Filter;