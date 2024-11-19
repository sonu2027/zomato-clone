import React, { useState } from "react";
import "./partnerLogin.css";
import img1 from "../../assets/zomato/zomatoPartnerLogo.svg";
import img2 from "../../assets/zomato/partnerLoginBodyImage.png";
import { useNavigate } from "react-router-dom";
import PartnerLoginForm from "../../component/partnerLoginForm/PartnerLoginForm";
import VerifyOtp from "../../component/otpverify/VerifyOtp";

function PartnerLogin() {

  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [email, setEmail] = useState("")

  const showLoginTab = () => {
    setShowRegister(true)
    setTimeout(function () {
      document.getElementsByClassName("form-element")[0].style.opacity = "1"; // Show the box after 0 seconds
      document.getElementsByClassName("form-element")[0].style.transform = "translateY(0)"; // Move the box from bottom to top
    });
  }

  return (
    <div onClick={() => {
      console.log("working", showRegister);
      if (showRegister) {
        setShowRegister(false)
      }
    }} className="partnerLogin">
      {
        otpSent && <VerifyOtp task="loginUser" setOtpSent={setOtpSent} otp={otp} email={email} />
      }
      {/* <div className="header">
        <img src={img1} alt="" />
      </div> */}
      <div className="body">
        {
          showRegister && <PartnerLoginForm setShowRegister={setShowRegister} setOtpSent={setOtpSent} setOtp={setOtp} email={email} setEmail={setEmail} />
        }
        <div className="body-child-div">
          <img src={img2} alt="" />
          <div className="t1">Food King Restaurant Partner dashboard</div>
          <button onClick={showLoginTab} className="button button1">
            Login
          </button>
          <button onClick={() => navigate("/partner/register")} className="button button2">Register</button>
          <div className="t2">
            <div>Contact Us</div>
            <div className="t2t1">+91-97-36583838</div>
          </div>
          <div className="t3">By continuing, you agree to our</div>
          <div className="t4">
            <div className="t4t1">
              <div className="t4t1t1">Terms of service</div>
              <div>|</div>
            </div>
            <div className="t4t1">
              <div className="t4t1t1">Privacy Policy</div>
              <div>|</div>
            </div>
            <div className="t4t1">
              <div className="t4t1t1">Code of Conduct</div>
              <div>|</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerLogin;
