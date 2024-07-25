import { useSelector } from "react-redux"
import "./Overview.css"
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";

function Overview(props) {

    const allRestaurantDetails = useSelector((s) => s.allRestaurant.data)
    console.log("allRestaurantDetails is : ", allRestaurantDetails, props.resId);

    const [restaurant, setRestaurant] = useState("")
    const [restTiming, setResTiming] = useState([])

    useEffect(() => {
        allRestaurantDetails.map((e) => {
            let arr = []
            if (e._id == props.resId) {
                setRestaurant(e)
                console.log("e is: ", e);
                for (let i = 0; i < e.restaurant_day.length; i++) {
                    let obj = { day: "", time: [] }
                    obj.day = e.restaurant_day[i]
                    for (let j = i * 2; j < i * 2 + 2; j++) {
                        obj.time.push(e.restaurant_hour[j])
                    }
                    arr.push(obj)
                    setResTiming((s) => [...s, obj])
                }
            }
        })
    }, [])

    console.log("resTiming is: ", restTiming);
    console.log("res is: ", restaurant);

    return (
        <>
            <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>About this place</div>
            <div style={{ fontSize: "1.3rem", margin: "1rem 0" }}>Menu</div>
            <img style={{ width: "20rem", height: "25rem", borderRadius: "6px" }} src={restaurant.restaurant_menu_URL} alt="Menu" />
            <div style={{ fontSize: "1.3rem", margin: "3rem 0 1rem 0" }}>Cuisines</div>
            <div style={{ display: "flex", columnGap: "1rem", margin: "1rem 0", overflow:"scroll" }} className="cuisines">
                {
                    props.arr.map((e) => <button style={{ color: "rgb(17, 145, 153)", padding: "8px 8px", borderRadius: "1rem", border: "1px solid rgb(139, 136, 136)" }} key={e}>{e}</button>)
                }
            </div>

            <hr style={{ marginTop: "3rem" }} />
            <div className="overview-contact-parent">
                <div className="child">
                    <MdOutlinePhoneInTalk className="clock-icon" />
                    <div>{restaurant.mobile_number_at_restaurant}</div>
                </div>
                <div className="child">
                    <TbDeviceLandlinePhone className="clock-icon" />
                    <div>{restaurant.landline_number}</div>
                </div>
            </div>

            <hr style={{ marginTop: "1rem" }} />
            <div className="overview-time-parent">
                <IoLocationOutline className="clock-icon" />
                <div>{restaurant.restaurant_location}</div>
            </div>

            <hr style={{ marginTop: "1rem" }} />
            <div className="overview-time-parent">
                <b><GoClock className="clock-icon" /></b>
                <div className="overview-time">
                    {
                        restTiming.map((e) => <div className="overview-time-child" key={e.day}>
                            <div className="day">{e.day}</div>
                            <div className="time">
                                <span>{e.time[0]} - </span>
                                <span>{e.time[1]}</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}
export default Overview