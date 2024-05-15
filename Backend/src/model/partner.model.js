import mongoose, { Schema } from "mongoose";

const partnerSchema = new Schema(
  {
    owner_full_name: {
      type: String,
      required: true,
    },
    owner_email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    restaurantId: {
      type: Array,
      required: false,
    },
    owner_profile_picture_URL: {
      type: String,
      requires: false,
    },
    owner_profile_picture_public_id: {
      type: String,
      requires: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Partner = mongoose.model("Partner", partnerSchema);
