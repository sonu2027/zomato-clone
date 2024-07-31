import { Partner } from "../model/partner.model.js";
import { Restaurant } from "../model/restaurant.model.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utility/cloudinary.utility.js";
import { Cuisines } from "../model/cuisines.model.js";

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
    // const image1 = await uploadOnCloudinary(restaurant_menu[0].path);
    // const image2 = await uploadOnCloudinary(restaurant_image[0].path);
    // const image3 = await uploadOnCloudinary(restaurant_food_image[0].path);

    const image1 = await uploadOnCloudinary(
      restaurant_menu[0].buffer,
      `${Date.now()}_${restaurant_menu[0].originalname}`
    );
    const image2 = await uploadOnCloudinary(
      restaurant_image[0].buffer,
      `${Date.now()}_${restaurant_image[0].originalname}`
    );
    const image3 = await uploadOnCloudinary(
      restaurant_food_image[0].buffer,
      `${Date.now()}_${restaurant_food_image[0].originalname}`
    );

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
    console.log("Error while registering partner restaurant: ", error);
    return res.status(500).json({
      error: error,
      message: "Error while registering partner restaurant",
    });
  }
};

const deleteRestaurant = async (req, res) => {
  console.log("req.body: ", req.body);
  const { resId: id } = req.body;
  try {
    const response = await Restaurant.deleteOne({ _id: id });
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log("error while deleting restaurant: ", error);
    return res
      .status(500)
      .json({ message: "Error while deleting restaurant: " });
  }
};

const partnerRestaurant = async (req, res) => {
  const restaurantIds = req.body.data;
  console.log("req.body", req.body);
  console.log("restaurantIds", restaurantIds); // is an array

  new Promise((resolve, reject) => {
    const restaurantPromises = restaurantIds.map((id) =>
      Restaurant.findById(id)
    );
    Promise.all(restaurantPromises)
      .then((restaurants) => resolve(restaurants))
      .catch((error) => reject(error));
  })
    .then((restaurants) => {
      console.log("restaurants are: ", restaurants);
      res.status(200).json(restaurants);
    })
    .catch((error) => {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ error: "Failed to fetch restaurants" });
    });
};

const deletePartnerRestaurant = async (req, res) => {
  console.log("req.body: ", req.body);
  const { id } = req.body;
  const response = await Partner.find({
    restaurantId: id,
  });
  console.log("response: ", response);

  const newRestaurantId = response[0].restaurantId.filter((e) => e != id);
  console.log("newresis: ", newRestaurantId);

  const response2 = await Partner.updateOne(
    { _id: response[0]._id },
    {
      // It will also work
      // $set: { restaurantId: newRestaurantId },
      restaurantId: newRestaurantId,
    }
  );
  console.log("response2: ", response2);
  return res.status(200).json({ res1: response, res2: response2 });
};

const updateRestaurant = async (req, res) => {
  console.log("req.body: ", req.body);
  console.log("req.files: ", req.files);
  const restaurant = await Restaurant.findById(req.body.restaurantId);
  console.log("restaurant: ", restaurant);

  const { restaurant_menu, restaurant_food_image, restaurant_image } =
    req.files;
  let image1 = "";
  let image2 = "";
  let image3 = "";

  try {
    if (restaurant_menu) {
      // image1 = await uploadOnCloudinary(restaurant_menu[0].path);
      image1 = await uploadOnCloudinary(
        restaurant_menu[0].buffer,
        `${Date.now()}_${restaurant_menu[0].originalname}`
      );
      const del1Res = await deleteFromCloudinary(
        restaurant.restaurant_menu_public_id
      );
      console.log("Image1 and del1Res: ", image1, del1Res);
    }

    if (restaurant_image) {
      image2 = await uploadOnCloudinary(
        restaurant_image[0].buffer,
        `${Date.now()}_${restaurant_image[0].originalname}`
      );
      const del2Res = await deleteFromCloudinary(
        restaurant.restaurant_image_public_id
      );
      console.log("Image2 and del2Res: ", image2, del2Res);
    }

    if (restaurant_food_image) {
      image3 = await uploadOnCloudinary(
        restaurant_food_image[0].buffer,
        `${Date.now()}_${restaurant_food_image[0].originalname}`
      );
      const del3Res = await deleteFromCloudinary(
        restaurant.restaurant_food_image__public_id
      );
      console.log("Image3 and del3Res: ", image3, del3Res);
    }

    const response = await Restaurant.updateOne(
      { _id: req.body.restaurantId },
      {
        restaurant_name: req.body.restaurant_name
          ? req.body.restaurant_name
          : restaurant.restaurant_name,
        restaurant_complete_address: req.body.restaurant_complete_address
          ? req.body.restaurant_complete_address
          : restaurant.restaurant_complete_address,
        restaurant_location: req.body.restaurant_location
          ? req.body.restaurant_location
          : restaurant.restaurant_location,
        mobile_number_at_restaurant: req.body.mobile_number_at_restaurant
          ? req.body.mobile_number_at_restaurant
          : restaurant.mobile_number_at_restaurant,
        landline_number: req.body.landline_number
          ? req.body.landline_number
          : restaurant.landline_number,
        restaurant_hour: req.body.restaurant_hour
          ? req.body.restaurant_hour
          : restaurant.restaurant_hour,
        restaurant_day: req.body.restaurant_day
          ? req.body.restaurant_day
          : restaurant.restaurant_day,
        describe_restaurant: req.body.describe_restaurant
          ? req.body.describe_restaurant
          : restaurant.describe_restaurant,
        cuisines: req.body.cuisines
          ? req.body.cuisines.split(",")
          : restaurant.cuisines,
        restaurant_type: req.body.restaurant_type
          ? req.body.restaurant_type
          : restaurant.restaurant_type,
        restaurant_menu_URL: restaurant_menu
          ? image1.url
          : restaurant.restaurant_menu_URL,
        restaurant_menu_public_id: restaurant_menu
          ? image1.public_id
          : restaurant.restaurant_menu_public_id,
        restaurant_image_URL: restaurant_image
          ? image2.url
          : restaurant.restaurant_image_URL,
        restaurant_image_public_id: restaurant_image
          ? image2.public_id
          : restaurant.restaurant_image_public_id,
        restaurant_food_image__URL: restaurant_food_image
          ? image3.url
          : restaurant.restaurant_food_image__URL,
        restaurant_food_image__public_id: restaurant_food_image
          ? image3.public_id
          : restaurant.restaurant_food_image__public_id,
      }
    );

    console.log("Response: ", response);
    return res.status(200).json({ response });
  } catch (error) {
    console.log("error updating restaurant: ", error);
    return res
      .status(500)
      .json({ response, message: "Error updating the restaurant" });
  }
};

const addCuisines = async (req, res) => {
  console.log("req.body: ", req.body);
  const { restaurantId, cuisinesData, partnerId } = req.body;

  const cuisine = await Cuisines.find({ restaurantId: restaurantId });
  console.log("Cuisine: ", cuisine);

  if (cuisine[0]) {
    console.log("update cuisine");
    try {
      const response = await Cuisines.updateOne(
        { restaurantId: restaurantId },
        { cuisines: cuisinesData }
      );
      console.log("Response: ", response);
      res.status(200).json({ response });
    } catch (error) {
      console.log("Error while updating cuisines: ", error);
      res
        .status(500)
        .json({ message: "Error while updating cuisines", response: response });
    }
  } else {
    console.log("add cuisine");
    try {
      const response = await Cuisines.create({
        restaurantId,
        cuisines: cuisinesData,
        partnerId,
      });
      console.log("Response: ", response);
      res.status(200).json(response);
    } catch (error) {
      console.log("Error while added cuisines");
      res.status(500).json({ message: "cuisines added failed" });
    }
  }
};

const getCuisines = async (req, res) => {
  console.log("req.body in getCuisines: ", req.body);
  const { partnerId: id } = req.body;
  try {
    const response = await Cuisines.find({ partnerId: id });
    console.log("Response in getCuisines: ", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching cuisines");
    res.status(500).json({ message: "fetching cuisines failed" });
  }
};

const getAllCuisines = async (req, res) => {
  try {
    const response = await Cuisines.find();
    console.log("Response in getAllCuisines: ", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching all cuisines");
    res.status(500).json({ message: "fetching all cuisines failed" });
  }
};

const getAllRes = async (req, res) => {
  try {
    const response = await Restaurant.find();
    console.log("Response is: ", response);
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while fetching all restaurat");
    res.status(500).json({ message: "fetching restaurat failed" });
  }
};

export {
  registerRestaurant,
  deleteRestaurant,
  partnerRestaurant,
  deletePartnerRestaurant,
  updateRestaurant,
  addCuisines,
  getCuisines,
  getAllRes,
  getAllCuisines,
};
