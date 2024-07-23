const getAllCuisines = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/getallcuisines`, {
      method: "GET",
    });
    console.log("Response in fetching all cuisines: ", response);
    const data = await response.json();
    console.log("data fetching all cuisines: ", data);
    if (response.ok) {
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { getAllCuisines };
