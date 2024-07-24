import axios from "axios";

const loginCustomer = async (email, password) => {
  try {
    //added cors origin
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("receiveed res is: ", response);
    console.log("data is: ", response.data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw "login failed";
    }
  } catch (error) {
    console.log("receiveed res not is: ", error);
    throw error;
  }
};

export { loginCustomer };
