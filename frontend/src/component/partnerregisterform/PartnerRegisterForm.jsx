import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { sendEmailOtp } from '../../databaseCall/sendEmailOtp.js';

function PartnerRegisterForm({ setShowRegister, handleChecked, setOtpSent, agree, setOtp, setFullName, fullName, setEmail, email }) {

    const [somethingWentWrong, setSomethingWentWrong] = useState("")

    const navigate = useNavigate()

    const handleEmailOtp = (e) => {
        e.preventDefault()
        if (agree && fullName.trim() != "" && email.trim() != "" && email.includes("@gmail.com")) {
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
        <div onClick={() => {
            setShowRegister(false)
            document.getElementsByClassName("PartnerRegister2")[0].style.filter = "blur(0)"
            document.getElementsByClassName("PartnerRegister2")[0].style.backgroundColor = "rgba(0, 0 ,0, 0)"
        }} className="PartnerRegister-child">
            <div onClick={(e) => e.stopPropagation()} className="PartnerRegister-grandChild">
                <div className="signup">
                    <div>Signup</div>
                    <RxCross1 className="cross-icon" onClick={() => {
                        setShowRegister(false)
                        document.getElementsByClassName("PartnerRegister2")[0].style.filter = "blur(0)"
                        document.getElementsByClassName("PartnerRegister2")[0].style.backgroundColor = "rgba(0, 0 ,0, 0)"
                    }} />
                </div>
                <form onSubmit={handleEmailOtp} encType='multipart/form-data'>
                    <input onChange={(e) => setFullName(e.target.value)} className="input" type="text" value={fullName} name="full_name" id="" placeholder="Full name" />
                    <input onChange={(e) => setEmail(e.target.value)} className="input" type="email" value={email} name="email" id="" placeholder="Email" />
                    <div className="check-box">
                        <input onChange={handleChecked} checked={agree} type="checkbox" name="" id="checkbox" />
                        <label htmlFor="checkbox">&nbsp; I agree to Food King's &nbsp;</label>{" "}
                        <span>Terms of Service</span>,<span>&nbsp; Privacy Policy &nbsp;</span>{" "}
                        <label htmlFor="checkbox">and &nbsp;</label>{" "}
                        <span>Content Policies</span>
                    </div>
                    {
                        somethingWentWrong != "" && <div>{somethingWentWrong}</div>
                    }
                    <button type='submit' className="create-account">Create account</button>
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
                    <div onClick={() => navigate("/partner/login")} className="create">Login</div>
                </div>
            </div>
        </div>
    )
}

export default PartnerRegisterForm