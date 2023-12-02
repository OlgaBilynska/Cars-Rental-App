import { useEffect } from "react";
import sprite from "../../assets/sprite.svg";
import ModalPortal from "../ModalCarItem/ModalPortal";
import {
  BackdropModalStyled,
  ModalContainerStyled,
  CloseBtnStyled,
} from "../ModalCarItem/ModalCarItem.styled";
import ModalContent from "../ModalContent/ModalContent";

const ModalCarItem = ({ children, onClick, id }) => {
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

  console.log("modal key", id);

  return (
    <ModalPortal>
      <BackdropModalStyled onClick={handleBackdropClick}>
        <ModalContainerStyled>
          <CloseBtnStyled onClick={handleCloseClick}>
            <use href={`${sprite}#icon-x`} />
          </CloseBtnStyled>
          <ModalContent id={id}>{children}</ModalContent>
        </ModalContainerStyled>
      </BackdropModalStyled>
    </ModalPortal>
  );
};

export default ModalCarItem;
