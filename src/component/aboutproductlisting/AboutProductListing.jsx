import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function AboutProductListing(props) {

    const allRestaurantDetails = useSelector((s) => s.allRestaurant.data)
    console.log("allRestaurantDetails is : ", allRestaurantDetails, props.resId);

    const [restaurant, setRestaurant] = useState("")

    useEffect(() => {
        allRestaurantDetails.map((e) => {
            if (e._id == props.resId)
                setRestaurant(e)
        })
    }, [])

    console.log("res is: ", restaurant);

    return (
        <>
            <img src={props.image} alt="Image" />
            <div className="shop-details">
                <div className="aboutshop">
                    <span>{props.shopName}</span>
                    <div style={{ color: "rgb(105, 105, 105)" }}>{String(restaurant.describe_restaurant)
                    }</div>
                    <div>{props.address || null}</div>
                </div>
                <div className="rating">
                    <div>{`${props.rating}★`}</div>
                    <div>{`${props.rating}★`}</div>
                </div>
            </div>
        </>
    )
}

export default AboutProductListing