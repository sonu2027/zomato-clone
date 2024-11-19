import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./LoginPage.css"
import { RxCross1 } from "react-icons/rx"
import { useNavigate } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { loginCustomer } from "../../databaseCall/customerlogin.js"
import { useDispatch } from "react-redux"
import { setCustomerDetail } from "../../store/customerSlice.js"
import { getCustomerOrder } from "../../databaseCall/getCustomerOrder.js"
import { setOrderFoundDetail, setOrderFound, setCustomerId } from "../../store/orderSlice.js"

function LoginPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showStatus, setShowStatus] = useState("")

    function authenticateUser(e) {
        e.preventDefault()
        loginCustomer(email, password)
            .then((data) => {
                console.log("data while login: ", data);
                dispatch(setCustomerDetail(data))
                return data._id
            })
            .then((customerId) => {
                getCustomerOrder(customerId)
                    .then((data) => {
                        if (data) {
                            dispatch(setOrderFound())
                            dispatch(setOrderFoundDetail(data))
                        }
                        else {
                            dispatch(setCustomerId(customerId))
                        }
                        navigate("/delivery")
                    })
            })
    }

    useEffect(() => {
        setTimeout(function () {
            document.getElementById("login-form-main-div").style.opacity = "1"; // Show the box after 0 seconds
            document.getElementById("login-form-main-div").style.transform = "translateY(0)"; // Move the box from bottom to top
        });
    }, [])

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div id="login-form-main-div">
            <div id="login-form">
                <div id="cross-icon">
                    <h3>Login</h3>
                    <RxCross1 onClick={goBack} />
                    {/* <Link to="/">
                        <RxCross1 />
                    </Link> */}
                </div>
                <form id="input-tag">
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type="text" placeholder="Email" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password" name="" id="" placeholder="Password" />
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
                    <div>New to Food king ? </div>
                    <Link style={{textDecoration:"none"}} to="/signup">
                        <div className="create">Create account</div>
                    </Link>
                </div>
                <div className="line">
                    <div>Do you have restaurant?</div>
                    <div onClick={() => navigate("/partner/register")} className="create">Register here</div>
                </div>
                {
                    showStatus.length > 0 && <div>{showStatus}</div>
                }
            </div>
        </div>
    )
}

export default LoginPage