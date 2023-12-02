import styled from "styled-components";
import { Link } from "react-router-dom";
import { AccentColorStyled } from "../../components/ModalContent/ModalContent.style";

export const CarItemsWrapperStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const CarItemStyled = styled.li`
  width: 274px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;

  outline: 1px solid black;
`;

export const ImgCarStyled = styled.img`
  width: 100%;
  height: 268px;

  border: 1px solid orange;
  border-radius: 14px;

  object-fit: cover;
`;

export const TextWrapperStyled = styled.div``;

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

  margin-bottom: 8px;

  font-size: 16px;
  line-height: 1.5;
`;

export const InfoWrapperStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;

  font-size: 12px;
  line-height: 1.5;
  color: var(--color-text-info);
`;

export const InfoItemStyled = styled.p`
  &::after {
    content: "";
    margin-left: 6px;
    border-right: 1px solid #1214171a;
  }
`;

export const InfoItemLastStyled = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: nowrap;
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const AccentColStyled = styled.span`
  color: var(--color-button);
`;
