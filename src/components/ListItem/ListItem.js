import React from "react";
import styled from "styled-components";

const ListItem = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
}) => {
  return (
    <StyledListItem>
      <h2>{name}</h2>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
      <p>Birth Year: {birth_year}</p>
      <p>Eyes Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Gender: {gender}</p>
    </StyledListItem>
  );
};

const StyledListItem = styled.div`
  list-style: none;
  padding: 12px 10px;
  border: 2px solid yellow;
  margin: 10px 0;
  color: #bbb;
  width: 30%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export default ListItem;
