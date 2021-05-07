import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";

const List = ({ searchValue }) => {
  const { characters } = useSelector((state) => state.characters);
  let listItems = [];
  console.log(searchValue);
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

const StyledParagraph = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 10px auto;
`;

const StyledSection = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default List;
