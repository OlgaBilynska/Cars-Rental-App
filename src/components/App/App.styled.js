import styled from "@emotion/styled";
import carBackground from "../../assets/car_background.jpg";

export const AppWrapperStyled = styled.div`
  text-align: center;

  background-image: ${(props) => props.$backgroundImage || "none"};
  background-size: cover;
  background-position: center;
`;
