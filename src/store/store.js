// import { configureStore } from "@reduxjs/toolkit";
// import partnerSlice from "./partnerSlice.js";
// import restaurantSlice from "./restaurantSlice.js";

// const store = configureStore({
//   reducer: {
//     partner: partnerSlice,
//     restaurant: restaurantSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import partnerSlice from "./partnerSlice";
import restaurantSlice from "./restaurantSlice";
import { combineReducers } from "redux";
import cuisinesSlice from "./cuisinesSlice.js";
import allRestaurantSlice from "./allRestaurantSlice.js";
import customerSlice from "./customerSlice.js";

// Combine your slices into a root reducer
const rootReducer = combineReducers({
  partner: partnerSlice,
  restaurant: restaurantSlice,
  cuisines: cuisinesSlice,
  allRestaurant: allRestaurantSlice,
  customer: customerSlice,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
