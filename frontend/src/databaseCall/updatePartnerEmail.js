const updatePartnerEmail = async (partnerId, newEmail) => {
  console.log("received partner id and new email is: ", partnerId, newEmail);
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/partner/updateemail`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ partnerId, newEmail }),
    });
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

export { updatePartnerEmail };
