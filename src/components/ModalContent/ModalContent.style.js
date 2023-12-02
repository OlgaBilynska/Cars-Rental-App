import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";
import { InfoWrapperStyled } from "../../pages/CatalogPage/CatalogPage.styled";

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ImgCarStyled = styled.img`
  width: 100%;
  height: 248px;

  border: 1px solid orange;
  border-radius: 14px;

  object-fit: cover;
`;

export const BtnRentalStyled = styled(ButtonStyled)`
  padding: 12px 50px;
`;

export const TitleModalStyled = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.5;
`;

export const InfoModalTextWrapperStyled = styled(InfoWrapperStyled)``;

export const SubTitleModalStyled = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const DescriptionModalStyled = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;

export const AccentColorStyled = styled.span`
  color: var(--color-button);
`;

export const InfoModalWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AccessoriesWrapperStyled = styled.div``;

export const InfoTitleWrapperStyled = styled.div``;

export const ImgTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
