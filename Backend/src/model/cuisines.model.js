import mongoose from "mongoose";
import { Schema } from "mongoose";

const cuisinesSchema = new Schema(
  {
    restaurantId: {
      type: String,
    },
    partnerId: {
      type: String,
    },
    cuisines: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const Cuisines = mongoose.model("Cuisines", cuisinesSchema);
