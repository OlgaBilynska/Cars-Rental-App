import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: fixed;
  width: 100vw;

  padding: 22px 0;

  background-color: lightblue;
`;

export const NavWrapperStyled = styled.ul`
  display: flex;
  margin-left: auto;
  justify-content: space-around;
`;

export const NavElStyled = styled(NavLink)`
  padding: 10px 24px;

  background-color: var(--color-button);
  color: var(--color-text-button);

  border: 1px solid var(--color-button);
  border-radius: 12px;

  cursor: pointer;

  transition: border 2500ms var(--timing-function);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
  }
`;
