import React, { useState } from "react";
import "./PartnerRegister.css";
import img1 from "../../assets/zomato/zomatoPartnerBusiness.png";
import { useNavigate } from "react-router-dom";
import PartnerRegisterForm from "../../component/partnerregisterform/PartnerRegisterForm";
import VerifyOtp from "../../component/otpverify/VerifyOtp";

function PartnerRegister() {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [otpSent, setOtpSent] = useState(false)
  const [agree, setAgree] = useState(false)
  const [otp, setOtp] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  const showLoginTab = () => {
    setShowRegister(true)
    setTimeout(function () {
      document.getElementsByClassName("PartnerRegister-grandChild")[0].style.opacity = "1"; // Show the box after 0 seconds
      document.getElementsByClassName("PartnerRegister-grandChild")[0].style.transform = "translateY(0)"; // Move the box from bottom to top
    });
    document.getElementsByClassName("PartnerRegister2")[0].style.filter = "blur(5px)"
    document.getElementsByClassName("PartnerRegister2")[0].style.backgroundColor = "rgba(0, 0 ,0, 0.9)"
  }

  const handleChecked = (e) => {
    console.log("event: ", e);
    if (e.target.checked == true) {
      document.getElementsByClassName("create-account")[0].style.background = "rgb(239, 79, 95)"
      document.getElementsByClassName("create-account")[0].style.color = "#fff"
      setAgree(e.target.checked)
    }
    else {
      document.getElementsByClassName("create-account")[0].style.background = "rgb(237, 235, 235)"
      document.getElementsByClassName("create-account")[0].style.color = "rgb(110, 109, 109)"
      setAgree(e.target.checked)
    }
  }

  return (
    <div className="PartnerRegister">
      {showRegister &&
        <PartnerRegisterForm setShowRegister={setShowRegister} handleChecked={handleChecked} setOtpSent={setOtpSent} agree={agree} setOtp={setOtp} setFullName={setFullName} fullName={fullName} email={email} setEmail={setEmail} />
      }
      {
        otpSent && <VerifyOtp task="registerUser" setOtpSent={setOtpSent} otp={otp} fullName={fullName} email={email} />
      }
      <div className="PartnerRegister2">
        <div className="t1">
          {/* <img src={img1} alt="" /> */}
          <button onClick={() => navigate("/partner/login")}>Login</button>
        </div>
        <div className="body">
          <div className="body-child">
            <div className="t2">
              <div>Partner with Food King</div>
              <div className="div2">at 0% commission for the 1st month!</div>
            </div>
            <div className="t3">
              And get ads worth INR 1500. Valid for new restaurant partners in
              select cities.
            </div>
            <div className="t4">
              <button onClick={showLoginTab} className="b1">Register your restaurant</button>
              <button onClick={() => navigate("/partner/login")} className="b2">
                Login to view your existing restaurant
              </button>
            </div>
            <div className="t5">Need help? Contact +91 97-38-38-38-38</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerRegister;
