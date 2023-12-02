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

// export const getCarById = createAsyncThunk(
//   "cars/getCarsById",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await instance.get(`adverts/:id`);
//       return data;
//     } catch (e) {
//       toastError(`Oops! Something went wrong! ${e.response.data}`);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
