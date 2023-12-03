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
  SelectStyled,
  SelectWrapperStyled,
  StyledInputOne,
  StyledInputTwo,
} from "./CarFilters.styled";

const CarFilters = () => {
  const cars = useSelector(selectCars);
  const brand = useSelector(selectCarsByBrand);
  const price = useSelector(selectPriceFilter);
  const mileage = useSelector(selectMileageFilter);
  console.log("c", cars[0]);
  // const selectCarByBrand = cars.map(car => car.make === )

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(cars);
  //   }, [dispatch, cars]);

  const handleBrandsChange = (e) => {
    dispatch(updateBrandFilter(e));
  };

  //   const capitalizeString = (string) => {
  //     return `${string[0].toUpperCase()}${string.slice(1)}`;
  //   };

  const brandList = [
    { value: "all", label: "All brands" },
    ...cars.map(({ id, make }) => ({
      value: id,
      label: make,
    })),
  ];

  const priceList = [
    ...cars.map(({ id, rentalPrice }) => ({
      value: id,
      label: rentalPrice,
    })),
  ];

  console.log("b", brandList);

  return (
    <FilterWrapperStyled>
      <LabelStyled>
        <SelectWrapperStyled>
          <SelectStyled
            value={brand || ""}
            onChange={handleBrandsChange}
            options={brandList}
          >
            <option disabled value="">
              Select your brand
            </option>
            {/* {brandList.map((brandOption) => (
              <option key={brandOption} value={brandOption}>
                {brandOption}
              </option>
            ))} */}
          </SelectStyled>
          <FilterNameStyled>Car Brand</FilterNameStyled>
        </SelectWrapperStyled>

        <SelectWrapperStyled>
          <SelectStyled
            value={price}
            // onChange={handleBrandsChange}
            placeholder="To $"
            options={priceList}
          ></SelectStyled>
          <FilterNameStyled>Price/ 1 hour</FilterNameStyled>
        </SelectWrapperStyled>

        <SelectWrapperStyled>
          <StyledInputOne
            // value={mileage}
            // onChange={handleBrandsChange}
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
