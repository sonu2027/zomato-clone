import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName:"",
  email:"",
  ppURL:"",
  ppPub_id:"",
  restaurantId:[],
  id:""
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    setPartnerDetail: (state, action) => {
      console.log("action: ", action);
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.ppURL = action.payload.ppURL;
      state.ppPub_id = action.payload.ppPub_id;
      state.restaurantId = action.payload.restaurantId;
      state.id = action.payload.id;
    },
    removePartnerDetail: (state) => {
        state.fullName = "";
        state.email = "";
        state.ppURL = "";
        state.ppPub_id = "";
        state.restaurantId=[];
        state.id = "";
    },
  },
});

export const { setPartnerDetail, removePartnerDetail } = partnerSlice.actions;

export default partnerSlice.reducer;
