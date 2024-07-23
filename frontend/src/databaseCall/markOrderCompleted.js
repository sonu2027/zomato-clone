import axios from "axios";

const markOrderCompleted = async (orderId) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/markordercompleted`,
      JSON.stringify({ orderId }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response in markordercomple: ", response);
    return response.data
  } catch (error) {}
};

export { markOrderCompleted };
