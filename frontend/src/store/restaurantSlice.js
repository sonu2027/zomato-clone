import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:"",
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setResDetail: (state, action) => {
      console.log("action.paylad: ", action.payload);
      state.data = action.payload;
    },
    removeResDetail: (state) => {
      state.data = "";
    },
  },
});

export const { setResDetail, removeResDetail } = restaurantSlice.actions;

export default restaurantSlice.reducer;
