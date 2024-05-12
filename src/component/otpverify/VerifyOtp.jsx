import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function VerifyOtp({ setOtpSent, otp, fullName, email }) {

  const navigate = useNavigate()

  const [inputOtp, setInputOtp] = useState(["", "", "", "", "", ""])

  const registerUser = async () => {
    const jsonData = {
      owner_full_name: fullName,
      owner_email: email
    }
    const response = await fetch("http://localhost:7000/registeruser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })

    console.log("response: ", response);
    const data = await response.json()
    console.log("data: ", data);
    return data.response._id
  }

  useEffect(() => {
    let register = true
    for (let i = 0; i < 6; i++) {
      if (inputOtp[i] == "") {
        register = false
        break
      }
    }
    if (register == true && otp == Number(inputOtp.join(""))) {
      console.log("otp is", otp, typeof otp, Number(inputOtp.join("")), typeof Number(inputOtp.join("")));

      registerUser().
        then((ownerId) => {
          navigate("/partner/register/create-your-restaurant", { state: { otp: otp, full_name: fullName, email, ownerId } })
        })
        .catch((e) => {
          console.log("error while registering: ", e);
        })
    }
  }, [inputOtp])

  const handleInputOtp = (e, i) => {
    if (i == "i1") {
      setInputOtp([e.target.value, inputOtp[1], inputOtp[2], inputOtp[3], inputOtp[4], inputOtp[5], inputOtp[6]])
    }
    else if (i == "i2") {
      setInputOtp([inputOtp[0], e.target.value, inputOtp[2], inputOtp[3], inputOtp[4], inputOtp[5], inputOtp[6]])
    }
    else if (i == "i3") {
      setInputOtp([inputOtp[0], inputOtp[1], e.target.value, inputOtp[3], inputOtp[4], inputOtp[5], inputOtp[6]])
    }
    else if (i == "i4") {
      setInputOtp([inputOtp[0], inputOtp[1], inputOtp[2], e.target.value, inputOtp[4], inputOtp[5], inputOtp[6]])
    }
    else if (i == "i5") {
      setInputOtp([inputOtp[0], inputOtp[1], inputOtp[2], inputOtp[3], e.target.value, inputOtp[5], inputOtp[6]])
    }
    else {
      setInputOtp([inputOtp[0], inputOtp[1], inputOtp[2], inputOtp[3], inputOtp[4], e.target.value])
    }
  }

  console.log("inputotp: ", inputOtp);

  return (
    <div className="verify-otp">
      <div className="verify-otp-content">
        <div className="otp-verif">
          <div>OTP Verification</div>
          <RxCross1 onClick={() => setOtpSent(false)} />
        </div>
        <div className="para">
          Verification code has been sent to your email, s*****e@gmail.com,
          please enter the same here to complete the signup. Valid for 10
          minutes.
        </div>
        <form>
          <input onChange={(e) => handleInputOtp(e, "i1")} type="text" name="" id="" />
          <input onChange={(e) => handleInputOtp(e, "i2")} type="text" name="" id="" />
          <input onChange={(e) => handleInputOtp(e, "i3")} type="text" name="" id="" />
          <input onChange={(e) => handleInputOtp(e, "i4")} type="text" name="" id="" />
          <input onChange={(e) => handleInputOtp(e, "i5")} type="text" name="" id="" />
          <input onChange={(e) => handleInputOtp(e, "i6")} type="text" name="" id="" />
        </form>
        <div className="time-count">00:00</div>
        <div className="resend">Not received OTP? Resend Now</div>
      </div>
    </div>
  );
}

export default VerifyOtp;
