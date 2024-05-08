import React, { useState } from "react";
import "./PartnerLogin.css";
import img1 from "../../assets/zomato/zomatoPartnerLogo.svg";
import img2 from "../../assets/zomato/partnerLoginBodyImage.png";
import { useNavigate } from "react-router-dom";
import PartnerLoginForm from "../../component/partnerLoginForm/PartnerLoginForm";

function PartnerLogin() {

  const navigate=useNavigate()

  const [showLogin, setShowLogin] = useState(false);

  const showLoginTab = () => {
    setShowLogin(true)
    setTimeout(function () {
      document.getElementsByClassName("form-element")[0].style.opacity = "1"; // Show the box after 0 seconds
      document.getElementsByClassName("form-element")[0].style.transform = "translateY(0)"; // Move the box from bottom to top
    });
  }

  const closeLoginTab = () => {
    setShowLogin(false)
  }

  return (
    <div className="partnerLogin">
      <div className="header">
        <img src={img1} alt="" />
      </div>
      <div className="body">
        {showLogin && <PartnerLoginForm closeLoginTab={closeLoginTab}/>}
        <div className="body-child-div">
          <img src={img2} alt="" />
          <div className="t1">Zomato Restaurant Partner dashboard</div>
          <button onClick={showLoginTab} className="button button1">
            Login
          </button>
          <button onClick={()=>navigate("/partner/register")} className="button button2">Register</button>
          <div className="t2">
            <div>Contact Us</div>
            <div className="t2t1">+91-97-38383838</div>
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
