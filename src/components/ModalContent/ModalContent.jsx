import React from "react";
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
  InfoModalItemStyled,
  InfoModalItemLastStyled,
  InfoModalAccessoriesWrapperStyled,
  AccessoriesFuncWrapperStyled,
  RentalConditionStyled,
  AccentNumberStyled,
  ConditionStyled,
  ConditionsWrapperStyled,
  TextConditionsWrapperStyled,
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
              <InfoModalItemStyled>
                {address.split(",").splice(1, 1)}
              </InfoModalItemStyled>
              <InfoModalItemStyled>
                {address.split(",").splice(2, 1)}
              </InfoModalItemStyled>
              <InfoModalItemStyled>Id: {id}</InfoModalItemStyled>
              <InfoModalItemStyled>Year: {year}</InfoModalItemStyled>
              <InfoModalItemLastStyled>Type: {type}</InfoModalItemLastStyled>
            </InfoModalTextWrapperStyled>

            <InfoModalTextWrapperStyled>
              <InfoModalItemStyled>
                Fuel Consumption: {fuelConsumption}
              </InfoModalItemStyled>
              <InfoModalItemLastStyled>
                Engine Size: {engineSize}
              </InfoModalItemLastStyled>
            </InfoModalTextWrapperStyled>
          </InfoModalWrapperStyled>
        </InfoTitleWrapperStyled>

        <DescriptionModalStyled>{description}</DescriptionModalStyled>
      </ImgTextWrapperStyled>

      <ConditionsWrapperStyled>
        <SubTitleModalStyled>
          Accessories and functionalities:
        </SubTitleModalStyled>
        <AccessoriesFuncWrapperStyled>
          <InfoModalAccessoriesWrapperStyled>
            {accessories.map((accessory) => (
              <InfoModalItemStyled>{accessory}</InfoModalItemStyled>
            ))}
          </InfoModalAccessoriesWrapperStyled>
          <InfoModalTextWrapperStyled>
            {functionalities.map((functionality) => (
              <InfoModalItemStyled>{functionality}</InfoModalItemStyled>
            ))}
          </InfoModalTextWrapperStyled>
        </AccessoriesFuncWrapperStyled>
      </ConditionsWrapperStyled>

      <ConditionsWrapperStyled>
        <SubTitleModalStyled>Rental Conditions:</SubTitleModalStyled>
        <TextConditionsWrapperStyled>
          {rentalConditions.split("\n").map((condition, index) => (
            <RentalConditionStyled key={index}>
              <ConditionStyled>
                {condition.includes(":")
                  ? condition
                      .split(":")
                      .map((part, i) => (
                        <React.Fragment key={i}>
                          {i === 0 ? (
                            <RentalConditionStyled>
                              {part}:&nbsp;
                            </RentalConditionStyled>
                          ) : (
                            <AccentNumberStyled>{part}</AccentNumberStyled>
                          )}
                        </React.Fragment>
                      ))
                  : condition}
              </ConditionStyled>
            </RentalConditionStyled>
          ))}
        </TextConditionsWrapperStyled>
      </ConditionsWrapperStyled>

      <BtnRentalStyled>Rental Car</BtnRentalStyled>
    </ModalContentWrapper>
  );
};

export default ModalContent;
