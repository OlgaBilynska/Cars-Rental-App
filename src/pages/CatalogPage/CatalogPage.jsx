import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import ModalCarItem from "../../components/ModalCarItem";
import { selectCars } from "../../redux/selectors";
import { getCars } from "../../redux/cars/carsOperations";
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
  LoadMoreStyled,
  HeartIconStyled,
  ImageWrapperStyled,
} from "./CatalogPage.styled";
import ModalContent from "../../components/ModalContent/ModalContent";
import CarFilters from "../../components/CarFilters/CarFilters";

const CatalogPage = () => {
  const carsList = useSelector(selectCars);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    // e.stopPropagation();
    setModalOpen((prevState) => !prevState);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <CarFilters />
      <CarItemsWrapperStyled>
        {carsList.map(
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
          }) => {
            const carID = nanoid();
            return (
              <CarItemStyled key={carID}>
                <ContentWrapperStyled>
                  <ImageWrapperStyled>
                    <ImgCarStyled src={img} alt={description} />
                    <HeartIconStyled>
                      <use href={`${sprite}#icon-heart`} />
                    </HeartIconStyled>
                  </ImageWrapperStyled>

                  <TextWrapperStyled>
                    <TitleWrapperStyled>
                      <p>
                        {make} <AccentColStyled>{model}</AccentColStyled>,{" "}
                        {year}
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

                <LinkBtnStyled onClick={toggleModal}>Learn More</LinkBtnStyled>
                {modalOpen && (
                  <ModalCarItem onClick={toggleModal}>
                    <ModalContent id={id} />
                  </ModalCarItem>
                )}
              </CarItemStyled>
            );
          }
        )}
      </CarItemsWrapperStyled>
      <LoadMoreStyled>Load more</LoadMoreStyled>
    </>
  );
};

export default CatalogPage;
