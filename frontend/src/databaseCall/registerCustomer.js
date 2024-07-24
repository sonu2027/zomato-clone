const customerRegistration = async (firstName, lastName, email, password) => {
  const jsonData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  console.log("json daa is : ", jsonData);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/register`,
      {
        headers:{
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify(jsonData),
      }
    );
    console.log("response: ", response);
    const data = await response.json();
    console.log("response data: ", data);
    if (response.ok) {
      return data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { customerRegistration };
