import {
  NavWrapperStyled,
  NavElStyled,
  WrapperStyled,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <WrapperStyled>
      <NavWrapperStyled>
        <li>
          <NavElStyled to="/">Home</NavElStyled>
        </li>
        <li>
          <NavElStyled to="/catalog">Catalog</NavElStyled>
        </li>
        <li>
          <NavElStyled to="/favorites">Favorite</NavElStyled>
        </li>
      </NavWrapperStyled>
    </WrapperStyled>
  );
};

export default Navigation;
