import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchNewCharacters } from "../../data/actions/characters.actions";

const ButtonLoadMore = () => {
  const dispatch = useDispatch();
  const { next } = useSelector((state) => state.characters);
  const handleButton = () => {
    dispatch(fetchNewCharacters(next));
  };
  const buttonComponent = next && (
    <StyledButton onClick={handleButton}>Load more...</StyledButton>
  );

  return buttonComponent;
};

const StyledButton = styled.button`
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid yellow;
  color: yellow;
  background-color: transparent;
  transition: 0.2s;
  &:hover {
    background-color: yellow;
    color: black;
  }
`;
export default ButtonLoadMore;
