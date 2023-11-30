import { useEffect } from "react";
import sprite from "../../assets/sprite.svg";
import ModalPortal from "../ModalCarItem/ModalPortal";
import {
  BackdropModalStyled,
  ModalContainerStyled,
  CloseBtnStyled,
  ModalChildrenStyled,
} from "../ModalCarItem/ModalCarItem.styled";

const ModalCarItem = ({ children, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <ModalPortal>
      <BackdropModalStyled onClick={handleBackdropClick}>
        <ModalContainerStyled>
          <CloseBtnStyled onClick={handleCloseClick}>
            <use href={`${sprite}#icon-x`} />
          </CloseBtnStyled>
          <ModalChildrenStyled>{children}</ModalChildrenStyled>
        </ModalContainerStyled>
      </BackdropModalStyled>
    </ModalPortal>
  );
};

export default ModalCarItem;
