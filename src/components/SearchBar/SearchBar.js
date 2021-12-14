import React from "react";
import { SearchBarDiv, SearchInput } from "./SearchBarStyles";

const SearchBar = (props) => {
  return (
    <SearchBarDiv>
      <SearchInput
        placeholder={props.placeholder}
        onChange={props.getUserInput}
      ></SearchInput>
    </SearchBarDiv>
  );
};

export default SearchBar;
