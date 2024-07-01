import mongoose from "mongoose";
import { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    restaurantId: {
      type: String,
    },
    userId: {
      type: String,
    },
    review: {
      type: String,
    },
    rating: {
        type:String
    }
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
