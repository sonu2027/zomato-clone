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
    // password: {
    //     type: String,
    //     required: [true, 'Password is required']
    // },
    // owner_mobile_number: {
    //   type: String,
    //   required: true,
    // },
    owner_profile_picture_URL: {
      type: String,
    },
    owner_profile_picture_public_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Partner = mongoose.model("Partner", partnerSchema);
