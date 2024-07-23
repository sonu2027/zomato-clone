const updateRestaurant = async (
  e,
  openingDayCount,
  describeRestaurant,
  cuisines,
  resType,
  ownerId,
  restaurantData
) => {
  e.preventDefault();
  console.log("I am in handle update restaurant");
  console.log(
    "Event is: ",
    e,
    openingDayCount,
    describeRestaurant,
    cuisines,
    resType,
    ownerId,
    restaurantData
  );

  console.log("checking cuisines: ", cuisines);

  const formData = new FormData(e.target);
  formData.append("restaurant_day", openingDayCount);
  formData.append("describe_restaurant", describeRestaurant);
  formData.append("cuisines", cuisines);
  formData.append("restaurant_type", resType);
  formData.append("ownerId", ownerId);
  formData.append("restaurantId", restaurantData._id);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/updaterestaurant`, {
      method: "PUT",
      body: formData,
    });
    console.log("response: ", response);
    const data = await response.json();
    console.log("data: ", data);
    if (response.ok) {
      return data.response.acknowledged;
    } else {
      throw error;
    }
  } catch (error) {
    console.log("Connection failed: ", error);
    throw error;
  }
};

export { updateRestaurant };
