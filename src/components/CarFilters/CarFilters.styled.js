import styled from "styled-components";

export const SearchBtnStyled = styled.button`
  display: inline;
  text-align: center;

  padding: 14px 44px;

  font-size: 14px;
  font-weight: 600;
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

export const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const FilterWrapperStyled = styled.form`
  margin-bottom: 50px;
`;

export const FilterNameStyled = styled.p`
  position: absolute;
  top: -8px;
  left: 0px;
  transform: translateY(-50%);
  pointer-events: none;

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  white-space: nowrap;
`;

export const SelectBrandStyled = styled.select`
  width: 100%;
  min-width: 224px;
  padding: 14px 18px;
  box-sizing: border-box;

  border-radius: 14px;
  background-color: #f7f7fb;
  border: transparent;

  &:focus {
    outline: none;
  }
`;

export const SelectPriceStyled = styled.select`
  width: 100%;
  min-width: 125px;
  padding: 14px 18px;
  box-sizing: border-box;

  border-radius: 14px;
  background-color: #f7f7fb;
  border: transparent;

  &:focus {
    outline: none;
  }
`;

export const SelectWrapperStyled = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledInputOne = styled.input`
  padding: 14px 24px;

  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border: transparent;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background-color: #f7f7fb;

  &:focus {
    border-color: var(--color-button);
  }
`;

export const StyledInputTwo = styled.input`
  padding: 14px 24px;

  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border: transparent;

  background-color: #f7f7fb;
  &:focus {
    border-color: var(--color-button);
  }
`;
