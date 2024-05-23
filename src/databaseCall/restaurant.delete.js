const deleteRestaurant = async (resId) => {
  const jsonData = {
    resId: resId,
  };
  const response = await fetch("http://localhost:7000/deleterestaurant", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
  console.log("response", response);
  const data = await response.json();
  console.log("data: ", data);
  return resId
};

export { deleteRestaurant };
