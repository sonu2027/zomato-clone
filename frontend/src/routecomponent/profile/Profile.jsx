import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"
import "./Profile.css"
import { useEffect, useState } from "react"
// importing custom hooks
import { useSelector } from "react-redux"
import { FaRegEdit } from "react-icons/fa";

function Profile() {
    const { status } = useParams()
    const [inputval, setInputval] = useState("")

    const allRestaurant = useSelector((s) => s.allRestaurant.data)
    const customer = useSelector((s) => s.customer.data)
    const [prevReq, setPrevReq] = useState(null)

    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

    window.addEventListener("click", () => {
        setInputval("")
    })

    const handleRequest = (e, action) => {
        e.target.style.background = "red"
        setPrevReq(e.target)
        if (prevReq !== null) {
            prevReq.style.background = "white"
        }
    }

    return (
        <>
            <Header search={handleSearch} status={status} />
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <div onClick={() => setBookmarked(false)}>
                                <SerachRestaurant inputvalue={inputval} status={status || 0} calling="nightlife" restaurant={allRestaurant} />
                            </div>
                        </div>
                    </> :
                    <>
                    </>
            }
            <div className="customer-profile">
                <div className="profile">
                    <div className="header">
                        <div className="backgroundImage">
                            <div className="child1">
                                <img className="profile-image" src="https://images.pexels.com/photos/16310456/pexels-photo-16310456/free-photo-of-temple-on-fansipan-mountain-in-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                                <b>{customer.firstName + " " + customer.lastName}</b>
                            </div>
                            <button className="edit-profile-button">
                                <FaRegEdit />
                                <div>Edit profile</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="activity">
                        <div>Activity</div>
                        <div onClick={(e) => handleRequest(e, "review")}>Reviews</div>
                        <div onClick={(e) => handleRequest(e, "bookmark")}>Bookmark</div>
                        <div onClick={(e) => handleRequest(e, "orderHistory")}>Order History</div>
                    </div>
                    <div className="review">
                        <div>Reviews</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile