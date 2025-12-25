// src/reduxs/store.js
import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
