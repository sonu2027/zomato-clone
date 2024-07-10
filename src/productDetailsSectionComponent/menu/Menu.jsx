import "./Menu.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Menu(props) {

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
            <div style={{fontSize:"1.5rem", margin:"1rem 0"}}>{restaurant.restaurant_name
            } Restaurant Menu</div>
            <img style={{ width: "20rem", height: "25rem", borderRadius: "6px" }} src={restaurant.restaurant_menu_URL} alt="Menu" />
        </>
    )
}
export default Menu