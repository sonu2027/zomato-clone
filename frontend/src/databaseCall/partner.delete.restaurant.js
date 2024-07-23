const deletePartnerRestaurant = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/deletepartnerrestaurant`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    console.log("Response of delete restaurant of partner: ", response);
    const data = await response.json();
    console.log("data after deleteing restaurant of partner: ", data);

    if (response.ok) {
      return data;
    } else {
      console.log("Error while deleting restauarnt of partner");
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { deletePartnerRestaurant };
