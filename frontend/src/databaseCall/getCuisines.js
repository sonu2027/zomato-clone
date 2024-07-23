const getCuisines = async (partnerId) => {
  console.log("PartnerId while fetching cuisines: ", partnerId);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/getcuisines`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ partnerId }),
    });
    console.log("Response in fetching cuisines: ", response);
    const data = await response.json();
    console.log("data fetching cuisines: ", data);
    if (response.ok) {
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { getCuisines };
