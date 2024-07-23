import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerDetail: (state, action) => {
      console.log("action.payload: ", action.payload);
      state.data = action.payload;
    },
    removeCustomerDetail: (state) => {
      state.data = "";
    },
  },
});

export const { setCustomerDetail, removeCustomerDetail } =
  customerSlice.actions;

export default customerSlice.reducer;
