const addRestaurantToPartner = async (ownerId, resId) => {
  const jsonData = {
    ownerId: ownerId,
    resId: resId,
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/addrestaurant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });
    const data = await response.json();
    console.log("data: ", data);
    if (response.ok) {
      return { resId: resId, added: true };
    } else {
      return { resId: resId, added: false };
    }
  } catch (error) {
    throw error;
  }
};

export { addRestaurantToPartner };
