// src/reduxs/slices/locationSlice.js
import { createSlice } from "@reduxjs/toolkit";
import provinces from "src/data/provinces.json";

const initialState = {
  provinces: provinces.map((p) => p.name),
  cities: Object.fromEntries(provinces.map((p) => [p.name, p.cities])),
  province: null,
  city: null,
  selectorOpen: false,
};

const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    openSelector(state) {
      state.selectorOpen = true;
    },
    closeSelector(state) {
      state.selectorOpen = false;
    },
    setProvince(state, action) {
      state.province = action.payload;
      state.city = null;
    },
    setCity(state, action) {
      state.city = action.payload;
      state.selectorOpen = false;
    },
  },
});

export const { openSelector, closeSelector, setProvince, setCity } =
  slice.actions;
export default slice.reducer;
