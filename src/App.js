import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import ButtonLoadMore from "./components/ButtonLoadMore/ButtonLoadMore";
import List from "./components/List/List";
import SearchInput from "./components/SearchInput/SearchInput";
import { fetchCharacters } from "./data/actions/characters.actions";

function App() {
  const { characters, lodaingStateNew, lodaingState } = useSelector(
    (state) => state.characters
  );

  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const ListOrLoader =
    lodaingState === "LOADING" ? (
      !searchValue && (
        <StyledLoader type="Puff" color="yellow" height={60} width={60} />
      )
    ) : (
      <List searchValue={searchValue} />
    );
  const ShowButton =
    lodaingStateNew === "LOADING" && characters.length > 0 ? (
      <StyledLoader type="Puff" color="yellow" height={60} width={60} />
    ) : (
      !searchValue && <ButtonLoadMore />
    );

  return (
    <StyledAppContainer className="App">
      <GlobalStyle />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <StyledHeader>Star Wars App</StyledHeader>
      {ListOrLoader}
      {ShowButton}
    </StyledAppContainer>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
  color: white;
  margin: 20px 0;
  @media (max-width: 700px) {
    margin: 60px 0;
  }
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
  font-family:"Roboto",sans-serif;
  margin:0;
  padding:0;
}
`;

const StyledAppContainer = styled.div`
  background-color: #1c1e22;
  position: absolute;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
`;

const StyledLoader = styled(Loader)`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export default App;
