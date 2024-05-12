import React from 'react'
import { RxCross1 } from "react-icons/rx"
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function PartnerLoginForm({closeLoginTab, }) {

    const navigate=useNavigate()

    return (
        <div className="form-element">
            <div className="t1">
                <div>Login</div>
                <RxCross1 className="cross-icon" onClick={closeLoginTab} />
            </div>
            <form>
                <div className="email-box">
                    <label htmlFor="email">Email | </label>
                    <input type="email" name="email" id="email" />
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
                <div onClick={()=>navigate("/partner/register")} className="create">Create account</div>
            </div>
        </div>
    )
}

export default PartnerLoginForm