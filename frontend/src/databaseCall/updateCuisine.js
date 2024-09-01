const updateCuisines = async (restaurantId, cuisinesData, partnerId) => {
    console.log("cuisineId while fetching cuisines: ", restaurantId, cuisinesData, partnerId);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/addcuisines`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ restaurantId, cuisinesData, partnerId }),
      });
      console.log("Response in updating cuisines: ", response);
      const data = await response.json();
      console.log("data updating cuisines: ", data);
      if (response.ok) {
        return data;
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  };
  
  export { updateCuisines };
  