import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const allRestaurantSlice = createSlice({
  name: "allRestaurant",
  initialState,
  reducers: {
    setAllRes: (state, action) => {
      console.log("action.paylad: ", action.payload);
      state.data = action.payload;
    },
    removeAllRes: (state) => {
      state.data = [];
    },
  },
});

export const { setAllRes, removeAllRes } = allRestaurantSlice.actions;

export default allRestaurantSlice.reducer;
