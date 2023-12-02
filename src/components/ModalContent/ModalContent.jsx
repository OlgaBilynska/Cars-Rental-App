import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import {
  BtnRentalStyled,
  TitleModalStyled,
  ImgCarStyled,
  InfoModalTextWrapperStyled,
  SubTitleModalStyled,
  DescriptionModalStyled,
  AccentColorStyled,
  InfoModalWrapperStyled,
  ModalContentWrapper,
  AccessoriesWrapperStyled,
  InfoTitleWrapperStyled,
  ImgTextWrapperStyled,
} from "./ModalContent.style";

const ModalContent = ({ id }) => {
  const carsList = useSelector(selectCars);

  const car = carsList.filter((car) => car.id === id);

  const carItem = car[0];
  const {
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
  } = carItem;

  return (
    <ModalContentWrapper>
      <ImgTextWrapperStyled>
        <ImgCarStyled src={img} alt={description} />

        <InfoTitleWrapperStyled>
          <TitleModalStyled>
            {make} <AccentColorStyled>{model}</AccentColorStyled>, {year}
          </TitleModalStyled>

          <InfoModalWrapperStyled>
            <InfoModalTextWrapperStyled>
              <p>{address.split(",").splice(1, 1)}</p>
              <p>{address.split(",").splice(2, 1)}</p>
              <p>Id: {id}</p>
              <p>Year: {year}</p>
              <p>Type: {type}</p>
            </InfoModalTextWrapperStyled>

            <InfoModalTextWrapperStyled>
              <p>Fuel Consumption: {fuelConsumption}</p>
              <p>Engine Size: {engineSize}</p>
            </InfoModalTextWrapperStyled>
          </InfoModalWrapperStyled>
        </InfoTitleWrapperStyled>

        <DescriptionModalStyled>{description}</DescriptionModalStyled>
      </ImgTextWrapperStyled>

      <AccessoriesWrapperStyled>
        <SubTitleModalStyled>
          Accessories and functionalities:
        </SubTitleModalStyled>
        <InfoModalTextWrapperStyled>{accessories}</InfoModalTextWrapperStyled>
        <InfoModalTextWrapperStyled>
          {functionalities}
        </InfoModalTextWrapperStyled>
      </AccessoriesWrapperStyled>

      <div>
        <SubTitleModalStyled>Rental Conditions:</SubTitleModalStyled>
        <InfoModalTextWrapperStyled>
          {rentalConditions}
        </InfoModalTextWrapperStyled>
      </div>

      <BtnRentalStyled>Rental Car</BtnRentalStyled>
    </ModalContentWrapper>
  );
};

export default ModalContent;
