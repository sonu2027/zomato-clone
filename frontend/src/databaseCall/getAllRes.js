const getAllRes = async () => {
  console.log("Fetching all restaurant started");

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/allrestaurant`, {
      method: "GET",
    });
    console.log("Response: ", response);
    if (response.ok) {
      const data = await response.json();
      console.log("data: ", data);
      console.log("Fetching all restaurant end");
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    console.log("Error while finding all restaurant: ", error);
    console.log("Fetching all restaurant end");
    throw error;
  }
};

export { getAllRes };
