import styled from "@emotion/styled";

export const AppWrapperStyled = styled.div`
  text-align: center;

  background-image: ${(props) => props.$backgroundImage || "none"};
  background-size: cover;
  background-position: center;
`;
