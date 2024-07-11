import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPartnerDetail } from "../../store/partnerSlice.js";
import { setResDetail } from "../../store/restaurantSlice.js";
import { partnerRegistartion } from "../../databaseCall/partner.registration.js";
import { partnerLogin } from "../../databaseCall/partner.login.js";
import { partnerRestaurant } from "../../databaseCall/get.partner.restaurant.js";
import { getCuisines } from "../../databaseCall/getCuisines.js";
import { setCuisines } from "../../store/cuisinesSlice.js";
import { getPartnerOrder } from "../../databaseCall/getPartnerOrder.js";
import { setPartnerOrder } from "../../store/partnerOrderSlice.js";
import "./VerifyOtp.css"

function VerifyOtp({ task, setOtpSent, otp, fullName, email }) {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [inputOtp, setInputOtp] = useState(["", "", "", "", "", ""])
  const [timeRemaining, setTimeRemaining] = useState(59)
  const [somethingWentWrong, setSomethingWentWrong] = useState(false)

  useEffect(() => {
    const timeStart = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1)
    }, 1000)
    setTimeout(() => {
      clearInterval(timeStart)
      setOtpSent(false)
    }, 59000)
  }, [])

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

      if (task == "registerUser") {
        partnerRegistartion(fullName, email)
          .then((data) => {
            dispatch(
              setPartnerDetail({
                fullName: data.response.owner_full_name,
                email: data.response.owner_email,
                ppURL: "",
                ppPub_id: "",
                id: data.response._id,
                restaurantId: "",
              })
            );
            navigate("/partner/register/create-your-restaurant")
          })
          .catch((error) => {
            console.log("Something wnet wrong while creating account, please try again:", error);
          })
      }
      else if (task == "loginUser") {
        partnerLogin(email)
          .then((partnerDetails) => {
            dispatch(
              setPartnerDetail({
                fullName: partnerDetails.response.owner_full_name,
                email: partnerDetails.response.owner_email,
                ppURL: partnerDetails.response.owner_profile_picture_URL || "",
                ppPub_id: partnerDetails.response.owner_profile_picture_public_id
                  || "",
                id: partnerDetails.response._id,
                restaurantId: partnerDetails.response.restaurantId,
              })
            );
            getCuisines(partnerDetails.response._id)
              .then((cuisines) => {
                console.log("received cuisines are: ", cuisines);
                dispatch(setCuisines(cuisines))
              })
              .catch((error) => {
                console.log("error: ", error);
              })
            return { restaurantId: partnerDetails.response.restaurantId, partnerId: partnerDetails.response._id }
          })
          .then(({ restaurantId, partnerId }) => {
            partnerRestaurant(restaurantId)
              .then((restaurant) => {
                dispatch(setResDetail(restaurant));
                navigate("/partner/home")
              })
              .catch((error) => {
                console.log("something went wrong: ", error);
              })
            return restaurantId
          })
          .then((restaurantId) => {
            console.log("restaurantId is for partner order: ", restaurantId);
            getPartnerOrder(restaurantId)
              .then((data) => {
                console.log("data of partner order is: ", data);
                dispatch(setPartnerOrder(data))
              })
              .catch(() => {

              })
          })
          .catch((error) => {
            console.log("User doesn't exist: ", error);
            setSomethingWentWrong(true)
            setTimeout(() => {
              setSomethingWentWrong(false)
              setOtpSent(false)
              navigate("/partner/register")
            }, 3000)
            console.log("error while login: ", e);
          })

      }
    }
  }, [inputOtp])

  const handleInputOtp = (e, i) => {
    const form = document.querySelectorAll("form")
    console.log("form: ", form[0][1]);

    if (i == "i1") {
      if (e.target.value) {
        form[0][1].focus()
      }
      if (e.target.value < 10) {
        setInputOtp([e.target.value, inputOtp[1], inputOtp[2], inputOtp[3], inputOtp[4], inputOtp[5], inputOtp[6]])
      }
    }
    else if (i == "i2") {
      if (e.target.value) {
        form[0][2].focus()
      }
      else {
        form[0][0].focus()
      }
      if (e.target.value < 10) {
        setInputOtp([inputOtp[0], e.target.value, inputOtp[2], inputOtp[3], inputOtp[4], inputOtp[5], inputOtp[6]])
      }
    }
    else if (i == "i3") {
      if (e.target.value) {
        form[0][3].focus()
      }
      else {
        form[0][1].focus()
      }
      if (e.target.value < 10) {
        setInputOtp([inputOtp[0], inputOtp[1], e.target.value, inputOtp[3], inputOtp[4], inputOtp[5], inputOtp[6]])
      }
    }
    else if (i == "i4") {
      if (e.target.value) {
        form[0][4].focus()
      }
      else {
        form[0][2].focus()
      }
      if (e.target.value < 10) {
        setInputOtp([inputOtp[0], inputOtp[1], inputOtp[2], e.target.value, inputOtp[4], inputOtp[5], inputOtp[6]])
      }
    }
    else if (i == "i5") {
      if (e.target.value) {
        form[0][5].focus()
      }
      else {
        form[0][3].focus()
      }
      if (e.target.value < 10) {
        setInputOtp([inputOtp[0], inputOtp[1], inputOtp[2], inputOtp[3], e.target.value, inputOtp[5], inputOtp[6]])
      }
    }
    else {
      if (!e.target.value) {
        form[0][4].focus()
      }
      if (e.target.value < 10) {
        setInputOtp([inputOtp[0], inputOtp[1], inputOtp[2], inputOtp[3], inputOtp[4], e.target.value])
      }
    }
  }

  console.log("inputotp: ", inputOtp);

  return (
    <div className="verify-otp">
      <div className="verify-otp-content">
        <div className="otp-verif">
          <div>OTP Verification</div>
          <RxCross1 onClick={() => {
            setOtpSent(false)
            document.getElementsByClassName("PartnerRegister2")[0].style.filter = "blur(0)"
            document.getElementsByClassName("PartnerRegister2")[0].style.backgroundColor = "rgba(0, 0 ,0, 0)"
          }} />
        </div>
        <div className="para">
          Verification code has been sent to your email, s*****e@gmail.com,
          please enter the same here to complete the signup. Valid for 10
          minutes.
        </div>
        <form>
          <input className="inputTag" onChange={(e) => handleInputOtp(e, "i1")} type="number" name="" id="" />
          <input className="inputTag" onChange={(e) => handleInputOtp(e, "i2")} type="number" name="" id="" />
          <input className="inputTag" onChange={(e) => handleInputOtp(e, "i3")} type="number" name="" id="" />
          <input className="inputTag" onChange={(e) => handleInputOtp(e, "i4")} type="number" name="" id="" />
          <input className="inputTag" onChange={(e) => handleInputOtp(e, "i5")} type="number" name="" id="" />
          <input className="inputTag" onChange={(e) => handleInputOtp(e, "i6")} type="number" name="" id="" />
        </form>
        {
          somethingWentWrong && <div className="time-count">User doesn't exist</div>
        }
        <div className="time-count">00:{timeRemaining}</div>
      </div>
    </div>
  );
}

export default VerifyOtp;
