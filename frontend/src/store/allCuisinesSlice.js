import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const allCuisinesSlice = createSlice({
  name: "allCuisines",
  initialState,
  reducers: {
    setAllCuisines: (state, action) => {
      console.log("action.paylad in all cuisines slice: ", action.payload);
      state.data = action.payload;
    },
    removeAllCuisines: (state) => {
      state.data = "";
    },
  },
});

export const { setAllCuisines, removeAllCuisines } = allCuisinesSlice.actions;

export default allCuisinesSlice.reducer;
