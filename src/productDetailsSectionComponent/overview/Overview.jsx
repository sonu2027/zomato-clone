import { useSelector } from "react-redux"
import "./Overview.css"
import { useEffect, useState } from "react";

function Overview(props) {

    const allRestaurantDetails = useSelector((s) => s.allRestaurant.data)
    console.log("allRestaurantDetails is : ", allRestaurantDetails, props.resId);

    const [restaurant, setRestaurant] = useState("")

    useEffect(() => {
        allRestaurantDetails.map((e) => {
            if (e._id == props.resId) {
                setRestaurant(e)
                console.log("e is: ", e);
            }
        })
    }, [])

    return (
        <>
            <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>About this place</div>
            <div style={{ fontSize: "1.3rem", margin: "1rem 0" }}>Menu</div>
            <img style={{ width: "20rem", height:"25rem", borderRadius:"6px" }} src={restaurant.restaurant_menu_URL} alt="Menu" />
            <div style={{fontSize:"1.3rem", margin:"3rem 0 1rem 0"}}>Cuisines</div>
            <div style={{display:"flex", columnGap:"1rem", margin:"1rem 0"}} className="cuisines">
                {
                    props.arr.map((e) => <button style={{ color: "rgb(17, 145, 153)", padding: "8px 8px", borderRadius: "1rem", border:"1px solid rgb(139, 136, 136)" }} key={e}>{e}</button>)
                }
            </div>
        </>
    )
}
export default Overview