import { useEffect, useState } from "react";
import "./RestaurantList.css"
import { Link } from "react-router-dom"

function RestaurantList(props) {

    const [cuisines, setCuisines] = useState([])
    console.log("props.cuisines: ", props.cuisines);
    console.log("props.id: ", props.id);


    useEffect(() => {
        let length = 0
        let newArr = []
        props.cuisines.map((e, i) => {
            length += e.length
            if (length <= 12) {
                newArr.push(e + ", ")
            }
        })
        newArr.push("...")
        setCuisines(newArr)
        console.log("newarr: ", newArr);
        newArr = []
    }, [])

    return (
        <div className="restaurant">
            <Link style={{ textDecoration: "none" }}
                to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.cuisines}&rating=${props.rating}&price=${props.price}&time=${props.time}&calling=${props.calling}&img=${props.image}&id=${props.id}`}
            >
                <img src={props.image} alt="Image" />
                <div className="item-parent">

                    <div className="item1">
                        <div style={{ fontSize: "1.1rem", color: "rgb(35, 35, 35)" }}>{props.shopName}</div>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{cuisines}</div>
                    </div>

                    <div className="item2">
                        <div style={{ fontSize: "0.9rem", color: "#fff", backgroundColor: "#248544", padding: "1px 6px", borderRadius: "6px" }}>{`${props.rating}★`}</div>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`₹${props.price} for one`}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default RestaurantList