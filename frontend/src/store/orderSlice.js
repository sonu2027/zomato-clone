import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderId: "",
  customerId: "",
  restaurantId: "",
  completed: false,
  orderedDone: false,
  orderFound: false,
  price: null,
  data: [],
  receiverAddress: "",
  receiverName: "",
  receiverPhoneNo: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderFound: (state, action) => {
      state.orderFound = true;
    },
    setCustomerId: (state, action) => {
      state.customerId = action.payload;
    },
    setOrderFoundDetail: (state, action) => {
      state.orderId = action.payload._id;
      state.customerId = action.payload.customerId;
      state.restaurantId = action.payload.restaurantId;
      state.completed = action.payload.completed;
      state.orderedDone = action.payload.orderedDone;
      state.price = action.payload.price;
      state.data = action.payload.items;
      state.receiverAddress = action.payload.receiverAddress;
      state.receiverName = action.payload.receiverName;
      state.receiverPhoneNo = action.payload.receiverPhoneNo;
    },
    setQuantity: (state, action) => {
      if (state.restaurantId != action.payload.resId) {
        state.restaurantId = action.payload.resId;
        state.data = [];
        state.data.push({
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        });
        state.price = Number(action.payload.price);
      } else {
        let found = false;

        state.data.map((e) => {
          if (e.name == action.payload.name) {
            found = true;
            e.quantity = action.payload.quantity;
            if (e.quantity == 0) {
              state.data = state.data.filter((e) => e.quantity != 0);
            }
          }
        });

        if (!found) {
          let obj = {
            name: action.payload.name,
            price: action.payload.price,
            quantity: action.payload.quantity,
          };
          state.data.push(obj);
        }
        let totalcost = 0;
        state.data.forEach((e) => {
          totalcost += e.quantity * e.price;
        });
        state.price = totalcost;
      }
    },

    setCustomerDetails: (state, action) => {
      console.log("action.payload in setCustomerDetls is : ", action.payload);
      console.log(
        "action.payload in setCustomerDetls is : ",
        action.payload.name
      );

      if (action.payload.name) {
        state.receiverName = action.payload.name;
      } else if (action.payload.address) {
        state.receiverAddress = action.payload.address;
      } else if (action.payload.phoneNo) {
        state.receiverPhoneNo = action.payload.phoneNo;
      }

      if(action.payload.name==""){
        state.receiverName=""
      }
      else if(action.payload.address===""){
        state.receiverAddress=""
      }
      else if(action.payload.phoneNo===""){
        state.receiverPhoneNo=""
      }
    },
    removeOrderDetail: (state) => {
      state.orderId = "";
      // state.customerId = "";
      state.restaurantId = "";
      state.completed = false;
      state.orderedDone = false;
      state.orderFound = false;
      state.price = null;
      state.data = [];
      state.receiverAddress = "";
      state.receiverName = "";
      state.receiverPhoneNo = "";
    },
  },
});

export const {
  setOrderFoundDetail,
  setCustomerId,
  removeOrderDetail,
  setQuantity,
  setCustomerDetails,
  setOrderFound,
} = orderSlice.actions;

export default orderSlice.reducer;
