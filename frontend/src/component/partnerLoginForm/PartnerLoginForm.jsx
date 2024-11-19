import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx"
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { sendEmailOtp } from "../../databaseCall/sendEmailOtp.js";

function PartnerLoginForm({ setShowRegister, setOtpSent, setOtp, setEmail, email }) {

    const [somethingWentWrong, setSomethingWentWrong] = useState("")

    const navigate = useNavigate()

    const handleEmailOtp = (e) => {
        e.preventDefault()
        if (email.trim() != "" && email.includes("@gmail.com")) {
            setOtpSent(true)
            setShowRegister(false)

            sendEmailOtp(email)
                .then((generatedOtp) => {
                    setOtp(generatedOtp)
                })
        }
        else {
            setSomethingWentWrong("Please fill the form with valid input")
            setTimeout(() => {
                setSomethingWentWrong("")
            }, 3000)
        }
    }

    return (
        <div onClick={(e) => { e.stopPropagation() }} className="form-element">
            <div className="t1">
                <div>Login</div>
                <RxCross1 className="cross-icon" onClick={() => setShowRegister(false)} />
            </div>
            <form onSubmit={handleEmailOtp} encType='multipart/form-data'>
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
                <div>New to Food King ? </div>
                <div onClick={() => navigate("/partner/register")} className="create">Create account</div>
            </div>
            {
                somethingWentWrong != "" && <div>{somethingWentWrong}</div>
            }
        </div>
    )
}

export default PartnerLoginForm