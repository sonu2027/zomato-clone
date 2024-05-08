import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./LoginPage.css"
import { RxCross1 } from "react-icons/rx"
import { useNavigate } from "react-router-dom"
import { MdEmail } from "react-icons/md";

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

    useEffect(() => {
        setTimeout(function () {
            document.getElementById("login-form-main-div").style.opacity = "1"; // Show the box after 0 seconds
            document.getElementById("login-form-main-div").style.transform = "translateY(0)"; // Move the box from bottom to top
        });
    }, [])


    return (
        <div id="login-form-main-div">
            <div id="login-form">
                <div id="cross-icon">
                    <h3>Login</h3>
                    <Link to="/">
                        <RxCross1 />
                    </Link>
                </div>
                <form id="input-tag">
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type="text" placeholder="Enter username as admin" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password" name="" id="" placeholder="Enter password as password" />
                    <button onClick={authenticateUser}>Log in</button>
                </form>
                <div className="line">
                    <hr />
                    <div> or </div>
                    <hr />
                </div>
                <div className="email">
                    <MdEmail className="email-icon" />
                    <div>Continue with email</div>
                </div>
                <div className="line">
                    <div>New to zomato ? </div>
                    <div className="create">Create account</div>
                </div>
                <div className="line">
                    <div>Do you have restaurant?</div>
                    <Link to="/partner/register"><div className="create">Register here</div></Link>
                </div>
                {
                    showStatus.length > 0 && <div>{showStatus}</div>
                }
            </div>
        </div>
    )
}

export default LoginPage