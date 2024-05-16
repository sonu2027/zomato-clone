import { Restaurant } from "../model/restaurant.model.js";
import { uploadOnCloudinary } from "../utility/cloudinary.utility.js";

const registerRestaurant = async (req, res) => {
  console.log("req.body: ", req.body);
  console.log("req.file: ", req.files);
  const {
    restaurant_name,
    restaurant_complete_address,
    restaurant_location,
    mobile_number_at_restaurant,
    landline_number,
    restaurant_type,
    describe_restaurant,
    cuisines,
    restaurant_hour,
    restaurant_day,
    ownerId,
  } = req.body;

  const { restaurant_menu, restaurant_food_image, restaurant_image } =
    req.files;

  console.log("typeof restaurant_hour: ", typeof restaurant_hour);

  try {
    const image1 = await uploadOnCloudinary(restaurant_menu[0].path);
    const image2 = await uploadOnCloudinary(restaurant_image[0].path);
    const image3 = await uploadOnCloudinary(restaurant_food_image[0].path);
    console.log("Image1: ", image1);
    console.log("Image2: ", image2);
    console.log("Image3: ", image3);

    if (!image1.public_id || !image2.public_id || !image3.public_id) {
      throw error;
    }

    const response = await Restaurant.create({
      restaurant_name,
      restaurant_complete_address,
      restaurant_location,
      mobile_number_at_restaurant,
      landline_number,
      restaurant_type: restaurant_type.split(","),
      describe_restaurant: describe_restaurant.split(","),
      cuisines: cuisines.split(","),
      restaurant_hour:
        typeof restaurant_hour == "object"
          ? restaurant_hour
          : restaurant_hour.split(","),
      restaurant_day: restaurant_day.split(","),
      restaurant_menu_URL: image1.url,
      restaurant_menu_public_id: image1.public_id,
      restaurant_image_URL: image2.url,
      restaurant_image_public_id: image2.public_id,
      restaurant_food_image__URL: image3.url,
      restaurant_food_image__public_id: image3.public_id,
      ownerId,
    });

    console.log("response: ", response);

    return res.status(200).json({ response });
  } catch (error) {
    console.log("Error while registering partner restaurant");
    return res.status(500).json({
      error: error,
      message: "Error while registering partner restaurant",
    });
  }
};

const deleteRestaurant=async(req,res)=>{
  console.log("req.body: ", req.body);
  const response=await Restaurant.deleteOne({_id:req.body.resId})
  console.log(response);
  return res.json(response)
}

export { registerRestaurant, deleteRestaurant };
