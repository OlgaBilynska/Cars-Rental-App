import styled from "styled-components";

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

export const LinkBtnStyled = styled.a`
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

  transform: scale(1);
  transition: border 2500ms var(--timing-function),
    transform 250ms var(--timing-function);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
    transform: scale(1.05);
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

export const AccentColStyled = styled.span`
  color: var(--color-button);
`;

export const BtnHeartStyled = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;
`;

export const HeartIconStyled = styled.svg`
  width: 18px;
  height: 18px;

  fill: var(--color-button);
`;

export const ImageWrapperStyled = styled.div`
  position: relative;
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const LoadMoreStyled = styled.button`
  margin-top: 100px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-button);

  text-decoration: underline;

  background-color: transparent;
  border: none;
`;
