import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewCharacters } from "../../data/actions/characters.actions";

const ButtonLoadMore = () => {
  const dispatch = useDispatch();
  const { next } = useSelector((state) => state.characters);
  const handleButton = () => {
    dispatch(fetchNewCharacters(next));
  };
  const buttonComponent = next && (
    <button onClick={handleButton}>Load more...</button>
  );

  return buttonComponent;
};

export default ButtonLoadMore;
