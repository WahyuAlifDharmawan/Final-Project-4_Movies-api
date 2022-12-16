import { configureStore, createReducer } from "@reduxjs/toolkit";
import moviesReducer from "../features/omdbapi/omdbapiSlice";
import detailsReducer from "../features/omdbapi/omdbapiSlice";
import searchReducer from "../features/omdbapi/omdbapiSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    detail: detailsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
