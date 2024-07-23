import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const partnerOrderSlice = createSlice({
  name: "partnerOrder",
  initialState,
  reducers: {
    setPartnerOrder: (state, action) => {
      console.log("action.payload: ", action.payload);
      state.data = action.payload;
    },
    removePartnerOrder: (state) => {
      state.data = [];
    },
  },
});

export const { setPartnerOrder, removePartnerOrder } =
  partnerOrderSlice.actions;

export default partnerOrderSlice.reducer;
