const partnerRegistartion = async (fullName, email) => {
  console.log("Partner registration started");
  console.log(
    "Got the fullName and email of partner during registration: ",
    fullName,
    email
  );

  const jsonData = {
    owner_full_name: fullName,
    owner_email: email,
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/registeruser`, {
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
      console.log("Partner reggistration started");
      return data;
    }
    else{
      throw error
    }
  } catch (error) {
    console.log("Error while registration: ", error);
    console.log("Partner reggistration started");
    throw error
  }
};

export { partnerRegistartion };
