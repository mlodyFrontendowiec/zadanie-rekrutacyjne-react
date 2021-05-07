import styled from "styled-components";

const StyledButton = styled.button`
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid yellow;
  color: yellow;
  background-color: transparent;
  transition: 0.2s;
  &:hover {
    background-color: yellow;
    color: black;
  }
`;
export default StyledButton;
