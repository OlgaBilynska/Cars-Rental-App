import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6568bbf19927836bd9755827.mockapi.io/api/cars",
});

export const updateFavorites = createAsyncThunk("favorites/updateFavorites");
