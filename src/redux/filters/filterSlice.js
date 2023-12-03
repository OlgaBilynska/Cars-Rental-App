import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  brand: { value: "all", label: "Enter the text" },
  price: { value: 0, label: "To $" },
  mileage: { value: 0, label: "From to" },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    updateBrandFilter(state, action) {
      state.category = action.payload;
    },
    updatePriceFilter(state, action) {
      state.price = action.payload;
    },
    updateMileageFilter(state, action) {
      state.mileage = action.payload;
    },
  },
});

export const { updateBrandFilter, updatePriceFilter, updateMileageFilter } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
