const uploadPartnerProfilePicture = async (e, id) => {
  e.preventDefault();
  console.log("event.tarhet: ", e.target, id);
  const formData = new FormData(e.target);
  formData.append("id", id);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/updateprofilepicture`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log("data: ", data);
    if (response.ok) {
      return data.res2;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

export { uploadPartnerProfilePicture };
