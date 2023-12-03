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
          <NavElStyled to="/advertisement">Catalog</NavElStyled>
        </li>
        <li>
          <NavElStyled to="/advertisement/favorites">Favorite</NavElStyled>
        </li>
      </NavWrapperStyled>
    </WrapperStyled>
  );
};

export default Navigation;
