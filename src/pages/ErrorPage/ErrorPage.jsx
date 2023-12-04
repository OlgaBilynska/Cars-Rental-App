import { TitleStyled } from "../FavoritePage/FavoritePage.styled";
import sprite from "../../assets/sprite.svg";
import {
  ButtonErrorStyled,
  ErrorWrapperStyled,
  PictureError,
  TextError,
} from "./ErrorPage.styled";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <ErrorWrapperStyled>
      <TitleStyled>404</TitleStyled>
      <TextError>Oops, something went wrong...</TextError>
      <PictureError>
        <use href={`${sprite}#icon-car-crash`} />
      </PictureError>
      <Link to="/">
        <ButtonErrorStyled>Go to Home Page</ButtonErrorStyled>
      </Link>
    </ErrorWrapperStyled>
  );
};

export default ErrorPage;
