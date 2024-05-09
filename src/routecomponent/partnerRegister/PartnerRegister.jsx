import React, { useState } from "react";
import "./PartnerRegister.css";
import img1 from "../../assets/zomato/zomatoPartnerBusiness.png";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

function PartnerRegister() {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  const showLoginTab = () => {
    setShowRegister(true)
    setTimeout(function () {
      document.getElementsByClassName("PartnerRegister-grandChild")[0].style.opacity = "1"; // Show the box after 0 seconds
      document.getElementsByClassName("PartnerRegister-grandChild")[0].style.transform = "translateY(0)"; // Move the box from bottom to top
    });
  }

  const handleChecked=(e)=>{
    if(e.target.checked==true){
        document.getElementsByClassName("create-account")[0].style.background="rgb(239, 79, 95)"
        document.getElementsByClassName("create-account")[0].style.color="#fff"
    }
    else{
        document.getElementsByClassName("create-account")[0].style.background="rgb(237, 235, 235)"
        document.getElementsByClassName("create-account")[0].style.color="rgb(110, 109, 109)"
    }
  }

  return (
    <div className="PartnerRegister">
      {showRegister && (
        <div className="PartnerRegister-child">
          <div className="PartnerRegister-grandChild">
            <div className="signup">
              <div>Signup</div>
              <RxCross1 className="cross-icon" onClick={()=>setShowRegister(false)}/>
            </div>
            <form>
              <input className="input" type="text" name="" id="" placeholder="Full name"/>
              <input className="input" type="email" name="" id="" placeholder="Email"/>
              <div className="check-box">
                <input onClick={handleChecked} type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox">&nbsp; I agree to Zomato's &nbsp;</label>{" "}
                <span>Terms of Service</span>,<span>&nbsp; Privacy Policy &nbsp;</span>{" "}
                <label htmlFor="checkbox">and &nbsp;</label>{" "}
                <span>Content Policies</span>
              </div>
              <button className="create-account">Create account</button>
            </form>
            <div className="line">
              <hr />
              <div>or</div>
              <hr />
            </div>
            <div className="email">
              <MdEmail className="email-icon" />
              <div>Continue with email</div>
            </div>
            <div className="line">
              <div>Already have an account ? </div>
              <div onClick={()=>navigate("/partner/login")} className="create">Login</div>
            </div>
          </div>
        </div>
      )}
      <div className="t1">
        <img src={img1} alt="" />
        <button>Login</button>
      </div>
      <div className="body">
        <div className="body-child">
          <div className="t2">
            <div>Partner with Zomato</div>
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
  );
}

export default PartnerRegister;
