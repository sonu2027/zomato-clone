import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema(
  {
    restaurant_name: {
      type: String,
      required: true,
      unique: true,
    },
    restaurant_complete_address: {
      type: String,
      required: true,
      unique: true,
    },
    restaurant_location: {
      type: String,
      required: true,
    },
    mobile_number_at_restaurant: {
      type: String,
      required: true,
      unique: true,
    },
    landline_number: {
      type: String,
      required: true,
      unique: true,
    },
    restaurant_type: {
      type: Array,
      required: true,
    },
    describe_restaurant: {
      type: Array,
      required: true,
    },
    cuisines: {
      type: Array,
      required: true,
    },
    restaurant_hour: {
      type: Array,
      required: true,
    },
    restaurant_day: {
      type: Array,
      required: true,
    },
    restaurant_menu_URL: {
      type: String,
      required: true,
    },
    restaurant_menu_public_id: {
      type: String,
      required: true,
    },
    restaurant_image_URL: {
      type: String,
      required: true,
    },
    restaurant_image_public_id: {
      type: String,
      required: true,
    },
    restaurant_food_image__URL: {
      type: String,
      required: true,
    },
    restaurant_food_image__public_id: {
      type: String,
      required: true,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
