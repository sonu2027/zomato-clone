const sendEmailOtp = async (e) => {
  console.log("sending email otp");
  console.log("event: ", e.target);
  const generatedOtp = Math.floor(Math.random() * 900000) + 100000;
  console.log("Generated otp: ", generatedOtp);
  const formData = new FormData(e.target);
  formData.append("otp", generatedOtp);
  try {
    const response = await fetch("http://localhost:7000/sendemailotp", {
      method: "POST",
      body: formData,
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
