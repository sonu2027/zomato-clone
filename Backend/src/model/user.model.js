import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userFullName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: string,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    userPassword:{
        type:String,
        required:true,
    },
    userProfilePicture:{
        type:String,
    },
    bookmark:{
        type:Array,
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);