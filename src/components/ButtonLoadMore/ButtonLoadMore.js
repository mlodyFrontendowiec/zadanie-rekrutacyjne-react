import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewCharacters } from "../../data/actions/characters.actions";
import StyledButton from "../StyledComponents/StyledButton";

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

export default ButtonLoadMore;
