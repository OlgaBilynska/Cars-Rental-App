import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalCarItem from "../../components/ModalCarItem";
import { selectCars } from "../../redux/selectors";
import { getCars } from "../../redux/cars/carsOperations";
// import Button from "../../components/Button/Button";
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
} from "./CatalogPage.styled";
import ModalContent from "../../components/ModalContent/ModalContent";

const CatalogPage = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  const carsList = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
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
            rentalConditions,
            mileage,
          }) => {
            console.log("keyCatalog", id);
            return (
              <CarItemStyled key={id}>
                <ContentWrapperStyled>
                  <ImgCarStyled src={img} alt={description} />
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
                {ModalOpen && (
                  <ModalCarItem id={id} onClick={toggleModal}>
                    <ModalContent />
                  </ModalCarItem>
                )}
              </CarItemStyled>
            );
          }
        )}
      </CarItemsWrapperStyled>
    </>
  );
};

export default CatalogPage;
