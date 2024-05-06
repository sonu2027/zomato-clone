import { Link } from "react-router-dom"
import { useState } from "react"
import "./LoginPage.css"
import { RxCross1 } from "react-icons/rx"
import { useNavigate } from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showStatus, setShowStatus] = useState("")

    function authenticateUser() {
        if (email == "admin" && password == "password") {
            navigate(`/login/loggedin/${1}`)
        }
        else {
            setShowStatus("Verification failed")
            setEmail("")
            setPassword("")
            setTimeout(() => {
                setShowStatus("")
            }, 3000)
        }
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
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type="text" placeholder="Enter username as admin" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password" name="" id="" placeholder="Enter password as password" />
                </div>
                {
                    showStatus.length > 0 && <div>{showStatus}</div>
                }
                <button onClick={authenticateUser}>Log in</button>
            </div>
        </div>
    )
}

export default LoginPage