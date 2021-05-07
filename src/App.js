import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledHeader>Star Wars App</StyledHeader>
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
