import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: { type: String, required: true },
    accepted: {
      type: Boolean,
    },
    completed: { type: Boolean },
    price: { type: Number },
    items: {
      type: Array,
      required: true,
    },
    houseNumber: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
