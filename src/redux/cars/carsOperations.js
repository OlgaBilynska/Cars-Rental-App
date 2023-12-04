import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastError = (text) => {
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

const instance = axios.create({
  baseURL: "https://6568bbf19927836bd9755827.mockapi.io/api/cars",
});

export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
  try {
    const url = `/adverts?&page=1&limit=12`;

    const { data } = await instance.get(url);
    return data;
  } catch (e) {
    toastError(`Oops! Something went wrong! ${e.response.data}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const onPageChange = createAsyncThunk(
  "cars/loadMore",
  async (page, thunkAPI) => {
    try {
      page = page + 1;
      const url = `/adverts?&page=${page}&limit=12`;

      const { data } = await instance.get(url);

      if (data.length < 12) {
        toast.info("These are all the cars in the category.");
      }

      return data;
    } catch {
      toast.error("Something went wrong, try again.");
    }
  }
);
