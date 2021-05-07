import React from "react";

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
    <div>
      <h2>{name}</h2>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
      <p>Birth Year: {birth_year}</p>
      <p>Eyes Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default ListItem;
