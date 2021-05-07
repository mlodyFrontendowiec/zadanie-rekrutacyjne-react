import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import ButtonLoadMore from "./components/ButtonLoadMore/ButtonLoadMore";
import List from "./components/List/List";
import { fetchCharacters } from "./data/actions/characters.actions";

function App() {
  const { characters, lodaingStateNew, lodaingState } = useSelector(
    (state) => state.characters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const ListOrLoader =
    lodaingState === "LOADING" ? (
      <Loader type="Puff" color="yellow" height={60} width={60} />
    ) : (
      <List />
    );
  const ShowButton =
    (lodaingState === "LOADING" || lodaingStateNew === "LOADING") &&
    characters.length > 0 ? (
      <Loader type="Puff" color="yellow" height={60} width={60} />
    ) : (
      <ButtonLoadMore />
    );

  return (
    <div className="App">
      <GlobalStyle />
      <StyledHeader>Star Wars App</StyledHeader>
      {ListOrLoader}
      {ShowButton}
    </div>
  );
}

const StyledHeader = styled.h1`
  font-size: 25px;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
  font-family:"Roboto",sans-serif;
  margin:0;
  padding:0;
}
`;

export default App;
