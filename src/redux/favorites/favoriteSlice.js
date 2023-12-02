import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = {
  favorite: false,
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    updateFavorites(state) {
      state.favorite = !state.favorite;
    },
  },
});

export const updateFavorites = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
