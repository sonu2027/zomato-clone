import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const cuisinesSlice = createSlice({
  name: "cuisines",
  initialState,
  reducers: {
    setCuisines: (state, action) => {
      console.log("action.paylad in cuisines slice: ", action.payload);
      state.data = action.payload;
    },
    removeCuisines: (state) => {
      state.data = "";
    },
  },
});

export const { setCuisines, removeCuisines } = cuisinesSlice.actions;

export default cuisinesSlice.reducer;
