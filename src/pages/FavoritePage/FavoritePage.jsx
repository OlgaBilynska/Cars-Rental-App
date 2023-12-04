import { useState } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Navigation from "../../components/Navigation";
import { TitleStyled } from "./FavoritePage.styled";
import { selectFavoriteCars } from "../../redux/selectors";
import ModalCarItem from "../../components/ModalCarItem";
import ModalContent from "../../components/ModalContent/ModalContent";
import sprite from "../../assets/sprite.svg";
import {
  CarItemsWrapperStyled,
  CarItemStyled,
  InfoWrapperStyled,
  LinkBtnStyled,
  TitleWrapperStyled,
  ImgCarStyled,
  TextWrapperStyled,
  InfoItemStyled,
  InfoItemLastStyled,
  ContentWrapperStyled,
  AccentColStyled,
  ImageWrapperStyled,
} from "../CatalogPage/CatalogPage.styled";

const FavoritePage = () => {
  const favoriteList = useSelector(selectFavoriteCars);
  console.log("fav", favoriteList);

  const [modalOpen, setModalOpen] = useState(false);
  const [clickedCarId, setClickedCarId] = useState(null);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  const onCarItemClick = (carID) => {
    setClickedCarId(carID);
    toggleModal();
  };

  return (
    <>
      <Navigation />
      <TitleStyled>Your Favorite Cars</TitleStyled>
      <CarItemsWrapperStyled>
        {favoriteList.map(
          ({
            id,
            year,
            make,
            model,
            type,
            img,
            description,
            fuelConsumption,
            engineSize,
            accessories,
            functionalities,
            rentalPrice,
            rentalCompany,
            address,
          }) => (
            <CarItemStyled key={nanoid()}>
              <ContentWrapperStyled>
                <ImageWrapperStyled>
                  {img ? (
                    <ImgCarStyled src={img} alt={description} />
                  ) : (
                    <svg>
                      <use href={`${sprite}#icon-auto`} />
                    </svg>
                  )}
                </ImageWrapperStyled>

                <TextWrapperStyled>
                  <TitleWrapperStyled>
                    <p>
                      {make} <AccentColStyled>{model}</AccentColStyled>, {year}
                    </p>

                    <p>{rentalPrice}</p>
                  </TitleWrapperStyled>

                  <InfoWrapperStyled>
                    <InfoItemStyled>
                      {address.split(",").splice(1, 1)}
                    </InfoItemStyled>
                    <InfoItemStyled>
                      {address.split(",").splice(2, 1)}
                    </InfoItemStyled>
                    <InfoItemStyled>{rentalCompany}</InfoItemStyled>
                  </InfoWrapperStyled>
                  <InfoWrapperStyled>
                    <InfoItemStyled>{type}</InfoItemStyled>
                    <InfoItemStyled>{model}</InfoItemStyled>
                    <InfoItemStyled>{id}</InfoItemStyled>
                    <InfoItemLastStyled>
                      {functionalities[0]}
                    </InfoItemLastStyled>
                  </InfoWrapperStyled>
                </TextWrapperStyled>
              </ContentWrapperStyled>

              <LinkBtnStyled onClick={(toggleModal, () => onCarItemClick(id))}>
                Learn More
              </LinkBtnStyled>
              {modalOpen && id === clickedCarId && (
                <ModalCarItem onClick={toggleModal}>
                  <ModalContent id={id} />
                </ModalCarItem>
              )}
            </CarItemStyled>
          )
        )}
      </CarItemsWrapperStyled>
    </>
  );
};

export default FavoritePage;
