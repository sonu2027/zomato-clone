import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    restaurantId: { type: String, required: true },
    completed: {
      type: Boolean,
      default: false,
    },
    orderedDone: {
      type: Boolean,
      default: false,
    },
    price: { type: Number },
    items: {
      type: Array,
      required: true,
    },
    receiverAddress: {
      type: String,
      required: true,
    },
    receiverName: {
      type: String,
      required: true,
    },
    receiverPhoneNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
