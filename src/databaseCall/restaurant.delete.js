const deleteRestaurant = async (resId) => {
  const response = await fetch("/api/deleterestaurant", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({resId}),
  });
  console.log("response", response);
  const data = await response.json();
  console.log("data: ", data);
  return resId
};

export { deleteRestaurant };
