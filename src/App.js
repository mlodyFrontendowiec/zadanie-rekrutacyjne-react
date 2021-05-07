import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonLoadMore from "./components/ButtonLoadMore/ButtonLoadMore";
import List from "./components/List/List";
import SearchInput from "./components/SearchInput/SearchInput";
import {
  GlobalStyle,
  StyledAppContainer,
  StyledHeader,
} from "./components/StyledComponents/StyledApp";
import StyledLoader from "./components/StyledComponents/StyledLoader";
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

export default App;
