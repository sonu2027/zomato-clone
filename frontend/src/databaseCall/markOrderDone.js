import axios from "axios";

const markOrderDone = async () => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/markorderdone`, JSON.stringify(), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};

export { markOrderDone };
