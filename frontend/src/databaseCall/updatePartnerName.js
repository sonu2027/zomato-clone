const updatePartnerName = async (partnerId, newName) => {
  console.log("Received partner id and newName is: ", partnerId, newName);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/partner/updatename`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ partnerId, newName }),
    });
    console.log("Response: ", response);
    const data = await response.json();
    console.log("data: ", data);
    if (response.ok) {
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { updatePartnerName };
