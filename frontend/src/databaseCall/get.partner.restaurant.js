const partnerRestaurant = async (restaurantId) => {
  console.log("Fetching partner restaurant");
  console.log("Restaurant Ids are: ", restaurantId);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/partnerrestaurant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: restaurantId }),
    });
    console.log("Response: ", response);
    if (response.ok) {
      const data = await response.json();
      console.log("data: ", data);
      console.log("Fetching partner restaurant end");
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    console.log("Error while finding partner restaurant: ", error);
    console.log("Fetching partner restaurant end");
    throw error;
  }
};

export { partnerRestaurant };
