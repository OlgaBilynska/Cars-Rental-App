import Navigation from "../../components/Navigation";
import { TitleStyled } from "./FavoritePage.styled";

const FavoritePage = () => {
  return (
    <div>
      <Navigation />
      <TitleStyled>Your Favorite Cars</TitleStyled>
    </div>
  );
};

export default FavoritePage;
