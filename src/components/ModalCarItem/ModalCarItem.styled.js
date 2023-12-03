import styled from "styled-components";

export const BackdropModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 200;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-text-info);
`;

export const ModalContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;
  width: 541px;

  overflow: hidden;
  z-index: 200;

  background-color: var(--color-text-button);

  border-radius: 24px;
`;

export const CloseBtnStyled = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;
  stroke: var(--color-text);

  cursor: pointer;
`;

export const ModalChildrenStyled = styled.div`
  margin: 0 auto;
  text-align: center;
`;
