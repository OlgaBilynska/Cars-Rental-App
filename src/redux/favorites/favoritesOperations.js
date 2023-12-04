import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../cars/carsOperations";
import { toastError } from "../cars/carsOperations";

export const getFavorite = createAsyncThunk(
  "favorites/getFavorite",
  async (_, thunkAPI) => {
    try {
      const url = `/favorites`;

      const { data } = await instance.get(url);
      return data;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (car, thunkAPI) => {
    try {
      const url = `/favorites`;

      const { data } = await instance.post(url, car);
      return data;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorites/deleteFavorite",
  async (carId, thunkAPI) => {
    try {
      const url = `/favorites/:id`;

      const { data } = await instance.delete(url + `${carId}`);
      return data;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFavorites = createAsyncThunk("favorites/updateFavorites");
