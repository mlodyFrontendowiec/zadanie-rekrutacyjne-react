import React from "react";
import styled from "styled-components";

const SearchInput = ({ searchValue, setSearchValue }) => {
  const handleInput = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return <StyledInput type="text" value={searchValue} onChange={handleInput} />;
};

const StyledInput = styled.input`
  left: 10%;
  top: 20px;
  position: absolute;
  font-size: 20px;
  @media (max-width: 700px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default SearchInput;
