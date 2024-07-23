const partnerLogin = async (email) => {
  console.log("Partner login started");
  console.log("received email is: ", email);

  const jsonData = {
    owner_email: email,
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    console.log("response: ", response);

    if (response.ok) {
      const data = await response.json();
      console.log("data: ", data);
      return data;
    } else {
      console.log("Partner login end");
      throw error;
    }
  } catch (error) {
    console.log("Login failed: ", error);
    console.log("Partner login end");
    throw error
  }
};

export { partnerLogin };
