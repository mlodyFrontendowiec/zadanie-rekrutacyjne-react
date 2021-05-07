import React from "react";
import StyledInput from "../StyledComponents/StyledInput";

const SearchInput = ({ searchValue, setSearchValue }) => {
  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  return <StyledInput type="text" value={searchValue} onChange={handleInput} />;
};

export default SearchInput;
