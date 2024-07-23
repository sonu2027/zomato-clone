import axios from "axios";

const getCustomerOrder = async (customerId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}api/getcustomerorder`,
      JSON.stringify({ customerId }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response of customer order is: ", response);
    return response.data;
  } catch (error) {}
};

export { getCustomerOrder };
