import axios from "axios";

const updateCustomerDetails = async (task, customerId, data) => {
  console.log("received data in updtcus is: ", task, customerId, data);
  try {
    const response = await axios.put(
      "/api/updatecustomerdetails",
      JSON.stringify({ task, customerId, data }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response is: ", response);
    if (response.statusText == "OK") {
      return true;
    } else {
      throw "NO";
    }
  } catch (error) {
    throw error;
  }
};

export { updateCustomerDetails };
