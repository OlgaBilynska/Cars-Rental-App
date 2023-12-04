import { createSlice } from "@reduxjs/toolkit";
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from "./favoritesOperations";

const favoriteInitialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,

  extraReducers: (builder) =>
    builder
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = action.payload;
      })
      .addCase(getFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        const index = state.favorites.findIndex(
          (favoriteCar) => favoriteCar.id === action.payload.id
        );
        state.favorites.splice(index, 1);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const favoriteReducer = favoriteSlice.reducer;
