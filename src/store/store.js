import { configureStore } from "@reduxjs/toolkit";
import partnerSlice from "./partnerSlice.js";
import restaurantSlice from "./restaurantSlice.js";

const store = configureStore({
  reducer: {
    partner: partnerSlice,
    restaurant: restaurantSlice,
  },
});

export default store;
