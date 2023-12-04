import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./cars/carsSlice";
import { filtersReducer } from "./filters/filterSlice";
import { favoriteReducer } from "./favorites/favoriteSlice";

const favoritePersistConfig = {
  key: "root",
  storage,
};

const combinedReducers = combineReducers({
  cars: carsReducer,
  filters: filtersReducer,
  favorites: persistReducer(favoritePersistConfig, favoriteReducer),
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
