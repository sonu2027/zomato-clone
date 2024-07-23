const restaurantRegistration = async (
  e,
  openingDayCount,
  describeRestaurant,
  cuisines,
  resType,
  ownerId
) => {
  e.preventDefault();

  console.log("Restaurant registration started");
  console.log("form event: ", e.target);

  const formData = new FormData(e.target);
  formData.append("restaurant_day", openingDayCount);
  formData.append("describe_restaurant", describeRestaurant);
  formData.append("cuisines", cuisines);
  formData.append("restaurant_type", resType);
  formData.append("ownerId", ownerId);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/registerrestaurant`, {
      method: "POST",
      body: formData,
    });
    console.log("response: ", response);
    const data = await response.json();
    console.log("response data: ", data);
    if (response.ok) {
      return data.response._id;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { restaurantRegistration };
