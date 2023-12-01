import { createSlice } from "@reduxjs/toolkit";
import { getCars, getCarsBrand } from "./carsOperations";

const initialCarsState = {
  cars: [], // first 12 cars
  brand: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialCarsState,

  extraReducers: (builder) =>
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarsBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.brand = action.payload;
      })
      .addCase(getCarsBrand.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
