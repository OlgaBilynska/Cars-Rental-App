import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarItemsWrapperStyled = styled.ul`
  display: flex;
  justify-content: center;
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
`;

export const ImgCarStyled = styled.img`
  width: 100%;
  height: 268px;

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: nowrap;

  &::after {
    content: "";
    margin-left: 6px;
    border-right: 1px solid #1214171a;
  }
`;

export const InfoItemLastStyled = styled.p`
  white-space: nowrap;
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

export const LoadMoreStyled = styled.div`
  margin-top: 100px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-button);

  text-decoration: underline;
`;

export const HeartIconStyled = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
`;

export const ImageWrapperStyled = styled.div`
  position: relative;
`;
