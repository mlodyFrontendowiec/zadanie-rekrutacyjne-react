import styled from "styled-components";

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
export default StyledListItem;
