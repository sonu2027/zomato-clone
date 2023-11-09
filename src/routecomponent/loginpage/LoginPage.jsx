import { Link } from "react-router-dom"
import { useState } from "react"
import "./LoginPage.css"
import { RxCross1 } from "react-icons/rx"

function LoginPage() {

    const [emailPhoneValue, setEmailPhoneValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [showStatus, setShowStatus] = useState(false)

    function authenticateUser() {
        if (emailPhoneValue == "admin" && passwordValue == "password")
            return true
        else
            return false
    }

    return (
        <div id="login-form-main-div">
            <div id="login-form">
                <div id="cross-icon">
                    <h3>Login</h3>
                    <Link to="/">
                        <RxCross1 />
                    </Link>
                </div>
                <div id="input-tag">
                    <input value={emailPhoneValue} onChange={(e) => setEmailPhoneValue(e.target.value)}
                        type="text" placeholder="Enter username as admin" />
                    <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}
                        type="password" name="" id="" placeholder="Enter password as password" />
                </div>
                {
                    authenticateUser() ?
                        <>
                            <Link to={`/login/loggedin/${1}`}>
                                <button>Login</button>
                            </Link>
                        </> :
                        <>
                            {
                                showStatus == true ?
                                    <>
                                        <button onClick={() => setShowStatus(true)}>Log in</button>
                                        <p>Verification failed</p>
                                    </> :
                                    <>
                                        <button onClick={() => setShowStatus(true)}>Log in</button>
                                    </>
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default LoginPage