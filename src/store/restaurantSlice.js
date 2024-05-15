import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resId:"",
  resName: "",
  address: "",
  location: "",
  resMobNo: "",
  landline_number: "",
  restaurant_type: [],
  describe_restaurant: [],
  cuisines: [],
  hour: [],
  day: [],
  menu_URL: "",
  menu_public_id: "",
  image_URL: "",
  image_public_id: "",
  food_image__URL: "",
  food_image__public_id: "",
  ownerId: "",
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setResDetail: (state, action) => {
      console.log("action: ", action);
      state.resId = action.payload.resId;
      state.resName = action.payload.resName;
      state.address = action.payload.address;
      state.location = action.payload.location;
      state.landline_number = action.payload.landline_number;
      state.resMobNo = action.payload.resMobNo;
      state.restaurant_type = action.payload.restaurant_type;
      state.describe_restaurant = action.payload.describe_restaurant;
      state.cuisines = action.payload.cuisines;
      state.hour = action.payload.hour;
      state.day = action.payload.menu_URL;
      state.menu_public_id = action.payload.menu_public_id;
      state.image_URL = action.payload.image_URL;
      state.image_public_id = action.payload.image_public_id;
      state.food_image__URL =  action.payload.food_image__URL;
      state.food_image__public_id = action.payload.food_image__public_id;
      state.ownerId = action.payload.ownerId;
    },
    removeResDetail: (state) => {
      state.resId="";
      state.names = "";
      state.address = "";
      state.location = "";
      state.resMobNo = "";
      state.landline_number = "";
      state.restaurant_type = [];
      state.describe_restaurant = [];
      state.cuisines = [];
      state.hour = [];
      state.day = [];
      state.menu_URL = "";
      state.menu_public_id = "";
      state.image_URL = "";
      state.image_public_id = "";
      state.food_image__URL = "";
      state.food_image__public_id = "";
      state.ownerId = "";
    },
  },
});

export const { setResDetail, removeResDetail } = restaurantSlice.actions;

export default restaurantSlice.reducer;
