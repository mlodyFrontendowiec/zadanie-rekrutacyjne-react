import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
  font-family:"Roboto",sans-serif;
  margin:0;
  padding:0;
}
`;

export const StyledAppContainer = styled.div`
  background-color: #1c1e22;
  position: absolute;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  color: white;
  margin: 20px 0;
  @media (max-width: 700px) {
    margin: 60px 0;
  }
`;
