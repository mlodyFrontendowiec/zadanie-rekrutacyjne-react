import styled from "styled-components";

const StyledInput = styled.input`
  left: 10%;
  top: 20px;
  position: absolute;
  font-size: 20px;
  @media (max-width: 700px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default StyledInput;
