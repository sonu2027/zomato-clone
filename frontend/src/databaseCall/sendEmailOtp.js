const sendEmailOtp = async (email) => {
  console.log("sending email otp: ", email);
  const generatedOtp = Math.floor(Math.random() * 900000) + 100000;
  console.log("Generated otp: ", generatedOtp);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sendemailotp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp: generatedOtp }),
    });
    console.log("response: ", response);
    if (response.ok) {
      const data = await response.json();
      console.log("data: ", data);
      console.log("sending email otp completed");
      return generatedOtp;
    }
  } catch (error) {
    console.log("Failed to send email otp: ", error);
    console.log("sending email otp completed");
  }
};

export { sendEmailOtp };
