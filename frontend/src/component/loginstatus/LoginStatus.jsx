import "./LoginStatus.css"
import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeCustomerDetail } from "../../store/customerSlice"
import { removeOrderDetail } from "../../store/orderSlice"
import { removeCuisines } from "../../store/cuisinesSlice"
import { useNavigate } from "react-router-dom"

function LoginStatus(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const customerDetail = useSelector((s) => s.customer.data)
    console.log("customer detail is: ", customerDetail);

    console.log("status in loginstatsu: Ending here", props.status);

    const [getOption, setGetOption] = useState(true)
    window.addEventListener("click", () => {
        if (!getOption) {
            setGetOption(true)
        }
    })

    const handleLogoutCustomer = (e) => {
        dispatch(removeCustomerDetail())
        dispatch(removeOrderDetail())
        dispatch(removeCuisines())
        navigate("/")
    }

    return (
        <div id="login-status">

            {customerDetail ? (
                <div id="after-login">
                    {getOption == true ?
                        <>
                            <span onClick={() => setGetOption(false)} id="account">&nbsp;S&nbsp;</span>&nbsp;
                            <span onClick={() => setGetOption(false)} >{customerDetail.firstName}</span>
                            <MdOutlineKeyboardArrowDown onClick={(e) => {
                                e.stopPropagation()
                                setGetOption(false)
                                e.stopPropagation()
                            }} className="after-login-option" />
                        </>
                        :
                        <>
                            <span onClick={() => setGetOption(true)}
                                id="account">&nbsp;S&nbsp;</span>&nbsp;
                            <span onClick={() => setGetOption(true)}>{customerDetail.firstName}</span>
                            <MdOutlineKeyboardArrowUp onClick={(e) => {
                                e.stopPropagation()
                                setGetOption(true)
                            }}
                                className="after-login-option" />
                            <div id="option">
                                <Link to={`/login/loggedin/profile/${props.status}`}>
                                    <button className="make-border-radius-8px-top">Profile</button>
                                </Link>
                                <button>Notifications</button>
                                <Link to={`/bookmark`}>
                                    <button>Bookmark</button>
                                </Link>
                                <button>Reviews</button>
                                <button>Network</button>
                                <button>Find Friends</button>
                                <button>Setting</button>
                                <button onClick={handleLogoutCustomer} className="make-border-radius-8px-bottom">Log out</button>
                            </div>
                        </>
                    }
                </div>
            ) :
                (
                    <>
                        <Link to="/login" style={{ color: "grey", textDecoration: "none" }}>Log in
                        </Link>
                        <Link to="/signup" style={{ color: "grey", textDecoration: "none" }}>Sign up
                        </Link>
                    </>
                )
            }
        </div>
    )
}
export default LoginStatus