import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import ModalCarItem from "../../components/ModalCarItem";
import { selectCars, selectFavoriteCars } from "../../redux/selectors";

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
  BtnHeartStyled,
} from "../CatalogPage/CatalogPage.styled";

import ModalContent from "../../components/ModalContent/ModalContent";
import CarFilters from "../../components/CarFilters/CarFilters";
import { onPageChange } from "../../redux/cars/carsOperations";
import Navigation from "../../components/Navigation";
import {
  addFavorite,
  getFavorite,
} from "../../redux/favorites/favoritesOperations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const carsList = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [clickedCarId, setClickedCarId] = useState(null);
  const [favorite, setFavorite] = useState(favoriteCars);

  const toggleIcon = (carId) => {
    setFavorite(dispatch(addFavorite(carId)));
  };

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  useEffect(() => {
    if (page === 0) {
      return;
    } else {
      dispatch(onPageChange(page));
    }
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const onCarItemClick = (carID) => {
    setClickedCarId(carID);
    toggleModal();
  };

  const onHeartClick = (carID) => {
    setClickedCarId(carID);
    toggleIcon(carID);
  };

  return (
    <>
      <Navigation />
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
            return (
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
                    {favorite && id === clickedCarId ? (
                      <BtnHeartStyled
                        onClick={() => {
                          onHeartClick(id);
                        }}
                      >
                        <HeartIconStyled>
                          <use href={`${sprite}#icon-active`} />
                        </HeartIconStyled>
                      </BtnHeartStyled>
                    ) : (
                      <BtnHeartStyled
                        onClick={() => {
                          onHeartClick(id);
                        }}
                      >
                        <HeartIconStyled>
                          <use href={`${sprite}#icon-heart`} />
                        </HeartIconStyled>
                      </BtnHeartStyled>
                    )}
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

                <LinkBtnStyled onClick={() => onCarItemClick(id)}>
                  Learn More
                </LinkBtnStyled>
                {modalOpen && id === clickedCarId && (
                  <ModalCarItem onClick={toggleModal}>
                    <ModalContent id={id} />
                  </ModalCarItem>
                )}
              </CarItemStyled>
            );
          }
        )}
      </CarItemsWrapperStyled>
      <LoadMoreStyled type="button" onClick={onLoadMore}>
        Load more
      </LoadMoreStyled>
    </>
  );
};

export default CatalogPage;
