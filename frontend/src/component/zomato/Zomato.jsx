import { useState } from "react"
import "./Zomato.css"
import { MdPersonOutline } from "react-icons/md"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCustomerDetail } from "../../store/customerSlice.js";
import { removeOrderDetail } from "../../store/orderSlice.js";
import { removeCuisines } from "../../store/cuisinesSlice.js";
import { useNavigate } from "react-router-dom";

function Zomato(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("status in zomato", props.status);
    const [getOption, setGetOption] = useState(false)

    const customer = useSelector((s) => s.customer.data)

    window.addEventListener("click", () => {
        if (getOption) {
            setGetOption(false)
        }
    })

    const handleLogoutCustomer = (e) => {
        dispatch(removeCustomerDetail())
        dispatch(removeOrderDetail())
        dispatch(removeCuisines())
        navigate("/")
    }

    return (
        <div id="zomato">
            {customer ? (
                <>
                    <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/delivery`}>
                        <h2><i>Food King</i></h2>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/delivery`}>
                        <h1><i>Food King</i></h1>
                    </Link>
                    {
                        getOption == true ?
                            <>
                                <MdPersonOutline onClick={(e) => {
                                    e.stopPropagation()
                                    setGetOption(false)
                                }} id="zomato-button" />
                                <div id="option">
                                    <Link to={`/login/loggedin/profile/${props.status}`}>
                                        <button className="make-border-radius-8px-top">Profile</button>
                                    </Link>
                                    <button>Notifications</button>
                                    <Link to="/bookmark">
                                        <button>Bookmark</button>
                                    </Link>
                                    <button>Reviews</button>
                                    <button>Network</button>
                                    <button>Find Friends</button>
                                    <button>Setting</button>
                                    <button onClick={handleLogoutCustomer} className="make-border-radius-8px-bottom">Log out</button>
                                </div>
                            </> :
                            <MdPersonOutline onClick={(e) => {
                                e.stopPropagation()
                                setGetOption(true)
                            }} id="zomato-button" />
                    }
                </>
            ) :
                (
                    <>
                        <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/delivery`}>
                            <h2><i>Food King</i></h2>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/delivery`}>
                            <h1><i>Food King</i></h1>
                        </Link>
                        <Link to="/login">
                            <MdPersonOutline id="zomato-button" />
                        </Link>
                    </>
                )}
        </div>
    )
}
export default Zomato