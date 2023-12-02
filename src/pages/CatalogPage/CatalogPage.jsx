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
} from "./CatalogPage.styled";

const CatalogPage = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  const carsList = useSelector(selectCars);
  console.log(carsList);

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
          }) => (
            <CarItemStyled key={id}>
              <ImgCarStyled src={img} alt={description} />
              <TextWrapperStyled>
                <TitleWrapperStyled>
                  <p>
                    {make} {model}, {year}
                  </p>

                  <p>{rentalPrice}</p>
                </TitleWrapperStyled>

                <InfoWrapperStyled>
                  <p>{address.split(",").splice(1, 1)}</p>
                  <p>{address.split(",").splice(2, 1)}</p>
                  <p>{rentalCompany}</p>
                </InfoWrapperStyled>
                <InfoWrapperStyled>
                  <p>{type}</p>
                  <p>{model}</p>
                  <p>{id}</p>
                  <p>{functionalities[0]}</p>
                </InfoWrapperStyled>
              </TextWrapperStyled>

              <LinkBtnStyled onClick={toggleModal}>Learn More</LinkBtnStyled>
            </CarItemStyled>
          )
        )}
      </CarItemsWrapperStyled>
      {ModalOpen && <ModalCarItem onClick={toggleModal} />}
    </>
  );
};

export default CatalogPage;
