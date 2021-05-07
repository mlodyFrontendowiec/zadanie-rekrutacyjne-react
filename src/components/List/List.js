import React from "react";
import { useSelector } from "react-redux";
import { StyledParagraph, StyledSection } from "../StyledComponents/StyledList";
import ListItem from "../ListItem/ListItem";

const List = ({ searchValue }) => {
  const { characters } = useSelector((state) => state.characters);
  let listItems = [];
  if (searchValue) {
    listItems = characters
      .filter((character) => character.name.toLowerCase().includes(searchValue))
      .map((chracter) => <ListItem {...chracter} key={chracter.name} />);
  } else {
    listItems = characters.map((chracter) => (
      <ListItem {...chracter} key={chracter.name} />
    ));
  }

  const ListItemsComopnent =
    listItems.length === 0 ? (
      <StyledParagraph>Not Found </StyledParagraph>
    ) : (
      listItems
    );

  return <StyledSection>{ListItemsComopnent}</StyledSection>;
};

export default List;
