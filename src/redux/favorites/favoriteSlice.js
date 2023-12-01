import { createSlice } from "@reduxjs/toolkit";
import { options } from "./fiavoriteOptions";

const favoriteInitialState = {
  favorite: options[1],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    updateFavorites(state, action) {
      state.favorite = action.payload;
    },
  },
});

export const updateFavorites = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
