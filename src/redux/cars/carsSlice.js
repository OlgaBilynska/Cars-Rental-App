import { createSlice } from "@reduxjs/toolkit";
import { getCars, onPageChange } from "./carsOperations";

const initialCarsState = {
  cars: [], // first 12 cars
  page: 1,
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
      .addCase(onPageChange.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.page = state.page + 1;
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(onPageChange.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(onPageChange.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),

  // .addCase(getCarById.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.brand = action.payload;
  // })
  // .addCase(getCarById.pending, (state) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(getCarById.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // }),
});

export const carsReducer = carsSlice.reducer;
