import "./RestaurantList.css"
import { Link } from "react-router-dom"
function RestaurantList(props) {
    return (
        <>
            {
                props.calling == "delivery" ?
                    <div className="restaurant">
                        <Link style={{ textDecoration: "none" }} 
                        to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.aboutShop}&rating=${props.rating}&price=${props.price}&time=${props.time}&calling=${props.calling}&img=${props.image}`}
                        >
                            <img src={props.image} alt="Image" />
                            <div className="item-parent">

                                <div className="item1">
                                    <div style={{ fontSize: "1.1rem", color: "rgb(35, 35, 35)" }}>{props.shopName}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{props.aboutShop ? `${props.aboutShop.slice(0, 18)}...` : ''}</div>
                                </div>

                                <div className="item2">
                                    <div style={{ fontSize: "0.9rem", color: "#fff", backgroundColor: "#248544", padding: "1px 6px", borderRadius: "6px" }}>{`${props.rating}★`}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{`₹${props.price} for one`}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{`${props.time} min`}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    :

                    <div className="restaurant">
                        <Link style={{ textDecoration: "none" }} 
                        to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.aboutShop}&rating=${props.rating}&price=${props.price}&distance=${props.distance}&calling=${props.calling}&address=${props.address}&img=${props.image}`}
                        >
                            <img src={props.image} alt="Image" />
                            <div className="item-parent">

                                <div className="item1">
                                    <div style={{ fontSize: "1.1rem", color: "rgb(35, 35, 35)" }}>{props.shopName}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{props.aboutShop ? `${props.aboutShop.slice(0, 18)}...` : ''}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{props.address}</div>
                                </div>

                                <div className="item2">
                                    <div style={{ fontSize: "0.9rem", color: "#fff", backgroundColor: "#248544", padding: "1px 6px", borderRadius: "6px" }}>{`${props.rating}★`}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{`₹${props.price} for two`}</div>
                                    <div style={{ fontSize: "0.9rem", color: "gray" }}>{`${props.distance} km`}</div>
                                </div>
                            </div>
                        </Link>
                    </div>

            }
        </>
    )
}
export default RestaurantList