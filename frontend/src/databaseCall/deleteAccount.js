const deleteAccount = async (id) => {
  const jsonData = { id };
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/deleteaccount`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });
    console.log("response: ", response);
    const data = await response.json();
    console.log("data: ", data);

    if(response.ok){
        return data
    }
    else{
        throw error
    }
  } catch (error) {
    console.log("error whilte deleting account: ", error);
  }
};

export { deleteAccount };
