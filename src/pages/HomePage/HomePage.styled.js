import styled from "@emotion/styled";
import { ButtonStyled } from "../../components/Button/Button.styled";

export const HomeWrapperStyled = styled.div`
  /* background-color: var(--color-text-button); */

  padding: 30px;
  background-color: #000;
  opacity: 0.8;
  color: white;

  border-radius: 10px;
`;

export const HomeTitleStyled = styled.h1`
  margin-bottom: 30px;

  font-size: 44px;
  font-weight: 600;
`;

export const HomeSubTextStyled = styled.p`
  margin-bottom: 30px;

  font-size: 22px;
  font-style: italic;
  text-align: left;
`;

export const HomeSubtitleStyled = styled.p`
  margin-bottom: 20px;

  text-decoration: underline;
  text-align: left;
`;

export const HomeTextListStyled = styled.ul`
  list-style-type: disc;
`;

export const HomeTextStyled = styled.li`
  margin-bottom: 20px;

  text-align: left;

  &:last-child {
    margin-bottom: 30px;
  }
`;

export const HomeTextEmphasizedStyled = styled.span`
  font-weight: bold;
`;

export const ButtonHomeStyled = styled(ButtonStyled)`
  padding: 14px 44px;
  margin: 0 auto;
`;
