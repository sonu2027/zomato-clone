import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx"
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function PartnerLoginForm({ setShowRegister, setOtpSent, setOtp, setEmail, email }) {

    const [somethingWentWrong, setSomethingWentWrong] = useState("")

    const navigate = useNavigate()

    const sendEmailOtp = async (e) => {
        console.log("e", e.target);
        const generatedOtp = Math.floor(Math.random() * 900000) + 100000;
        console.log("Generated otp: ", generatedOtp);
        const formData = new FormData(e.target)
        formData.append("otp", generatedOtp)
        const response = await fetch("http://localhost:7000/sendemailotp", {
            method: "POST",
            body: formData
        })
        console.log("response: ", response);
        if (response.ok) {
            setOtp(generatedOtp)
            const data = await response.json()
            console.log("data: ", data);
        }

    }

    const handleOtp = (e) => {
        e.preventDefault()
        if (email.trim() != "" && email.includes("@gmail.com")) {
            setOtpSent(true)
            setShowRegister(false)

            sendEmailOtp(e)
        }
        else {
            setSomethingWentWrong("Please fill the form with valid input")
            setTimeout(() => {
                setSomethingWentWrong("")
            }, 3000)
        }
    }

    return (
        <div onClick={(e)=>{e.stopPropagation()}} className="form-element">
            <div className="t1">
                <div>Login</div>
                <RxCross1 className="cross-icon" onClick={() => setShowRegister(false)} />
            </div>
            <form onSubmit={handleOtp} encType='multipart/form-data'>
                <div className="email-box">
                    <label htmlFor="email">Email | </label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" />
                </div>
                <button type="submit">Send one time password</button>
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
                <div>New to zomato ? </div>
                <div onClick={() => navigate("/partner/register")} className="create">Create account</div>
            </div>
            {
                somethingWentWrong != "" && <div>{somethingWentWrong}</div>
            }
        </div>
    )
}

export default PartnerLoginForm