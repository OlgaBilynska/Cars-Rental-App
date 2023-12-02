import { ContentWrapperStyled } from "./ContentWrapper.styled";

const ContentWrapper = ({ children }) => {
  return <ContentWrapperStyled>{children}</ContentWrapperStyled>;
};

export default ContentWrapper;
