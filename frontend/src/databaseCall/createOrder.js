import axios from "axios";

const createOrder = async (order) => {
  console.log(order);

  const data = {
    customerId: order.customerId,
    restaurantId: order.restaurantId,
    completed: false,
    orderedDone: true,
    price: order.price,
    items: order.data,
    receiverAddress: order.receiverAddress,
    receiverName: order.receiverName,
    receiverPhoneNo: order.receiverPhoneNo,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/createorder`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response in create order: ", response);
    return response.data;
  } catch (error) {}
};

export { createOrder };
