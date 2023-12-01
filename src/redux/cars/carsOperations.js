import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastError = (text) => {
  toast.error(text, {
    position: "top-center",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const instance = axios.create({
  baseURL: "https://6568bbf19927836bd9755827.mockapi.io/api/cars",
});

export const getCars = createAsyncThunk(
  "cars/getCars",
  async ({ brand, query, price, mileage, favorite }, thunkAPI) => {
    try {
      const queryParams = [];

      if (brand && brand !== "all") {
        queryParams.push(`category_id = ${brand}`);
      }

      if (query && query.trim() !== "") {
        queryParams.push(`query=${query}`);
      }

      if (price && price !== "") {
        queryParams.push(`price=${price}`);
      }

      if (mileage && mileage !== "") {
        queryParams.push(`mileage=${mileage}`);
      }

      if (favorite && favorite !== "all") {
        queryParams.push(`favorite=${favorite}`);
      }

      const queryString = queryParams.join("&");
      const url = `cars/adverts?${queryString}&page=1&limit=12`;

      const { data } = await instance.get(url);
      return data;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCarsBrand = createAsyncThunk(
  "cars/getCarsBrand",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`adverts/brand`);
      return data;
    } catch (e) {
      toastError(`Oops! Something went wrong! ${e.response.data}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
