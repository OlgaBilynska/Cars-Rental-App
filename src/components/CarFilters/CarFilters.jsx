// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCars,
  selectCarsByBrand,
  selectMileageFilter,
  selectPriceFilter,
} from "../../redux/selectors";
import { updateBrandFilter } from "../../redux/filters/filterSlice";
import {
  SearchBtnStyled,
  LabelStyled,
  FilterWrapperStyled,
  FilterNameStyled,
  SelectBrandStyled,
  SelectWrapperStyled,
  StyledInputOne,
  StyledInputTwo,
  SelectPriceStyled,
} from "./CarFilters.styled";

const CarFilters = () => {
  const cars = useSelector(selectCars);
  const brand = useSelector(selectCarsByBrand);
  const price = useSelector(selectPriceFilter);
  const mileage = useSelector(selectMileageFilter);

  const dispatch = useDispatch();

  const handleBrandsChange = (e) => {
    dispatch(updateBrandFilter(e));
  };

  const priceList = [
    ...cars.map(({ id, rentalPrice }) => ({
      value: id,
      label: rentalPrice,
    })),
  ];

  return (
    <FilterWrapperStyled>
      <LabelStyled>
        <SelectWrapperStyled>
          <SelectBrandStyled value={brand || ""} onChange={handleBrandsChange}>
            <option hidden>Enter the text</option>
            <option>Buick</option>
            <option>Volvo</option>
            <option>HUMMER</option>
            <option>Subaru</option>
            <option>Mitsubishi</option>
            <option>Nissan</option>
            <option>Lincoln</option>
            <option>GMC</option>
            <option>Hyundai</option>
            <option>MINI</option>
            <option>Bentley</option>
            <option>Mercedes-Benz</option>
            <option>Aston Martin</option>
            <option>Pontiac</option>
            <option>Lamborghini</option>
            <option>Audi</option>
            <option>BMW</option>
            <option>Chevrolet</option>
            <option>Chrysler</option>
            <option>Kia</option>
            <option>Land</option>
          </SelectBrandStyled>
          <FilterNameStyled>Car Brand</FilterNameStyled>
        </SelectWrapperStyled>

        <SelectWrapperStyled>
          <SelectPriceStyled
            value={price}
            onChange={handleBrandsChange}
            placeholder="To $"
            options={priceList}
          ></SelectPriceStyled>
          <FilterNameStyled>Price/ 1 hour</FilterNameStyled>
        </SelectWrapperStyled>

        <SelectWrapperStyled>
          <StyledInputOne
            value={mileage}
            onChange={handleBrandsChange}
            placeholder="From"
          />
          <StyledInputTwo placeholder="To" />
          <FilterNameStyled>Сar mileage / km</FilterNameStyled>
        </SelectWrapperStyled>

        <SearchBtnStyled type="submit">Search</SearchBtnStyled>
      </LabelStyled>
    </FilterWrapperStyled>
  );
};

export default CarFilters;
