import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../ListItem/ListItem";

const List = () => {
  const { characters } = useSelector((state) => state.characters);
  const listItems = characters.map((chracter) => (
    <ListItem {...chracter} key={chracter.name} />
  ));

  return <section>{listItems}</section>;
};

export default List;
