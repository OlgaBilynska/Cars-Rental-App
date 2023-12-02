import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarItemsWrapperStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const CarItemStyled = styled.li`
  width: 274px;
  height: 354px;
`;

export const ImgCarStyled = styled.img`
  width: 100%;
  margin-bottom: 14px;
`;

export const TextWrapperStyled = styled.div`
  margin-bottom: 28px;
`;

export const LinkBtnStyled = styled(Link)`
  display: block;
  width: 100%;

  padding: 12px 99.5px;

  text-align: center;
  font-size: 14px;
  line-height: 1.43;

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

export const TitleWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  line-height: 1.5;
`;

export const InfoWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  font-size: 12px;
  line-height: 1.5;

  color: var(--color-text-info);

  &::after {
    border-right: 1px solid var(--color-text-info);
  }
`;
