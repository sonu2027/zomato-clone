import axios from "axios";

const getPartnerOrder = async (restaurantId) => {
  console.log("restaurant id is: ", restaurantId);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/getpartnerorder`,
      JSON.stringify({ restaurantId }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response is: ", response);
    console.log("data: ", response.data);
    return response.data;
  } catch (error) {}
};

export { getPartnerOrder };
