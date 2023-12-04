import { TitleStyled } from "../FavoritePage/FavoritePage.styled";
import sprite from "../../assets/sprite.svg";
import { PictureError, TextError } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <div>
      <TitleStyled>404</TitleStyled>
      <TextError>Oops, something went wrong...</TextError>
      <PictureError>
        <use href={`${sprite}#icon-car-crash`} />
      </PictureError>
    </div>
  );
};

export default ErrorPage;
