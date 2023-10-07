import "./RestaurantList.css"
function RestaurantList(props) {
    return (
        <>
            <div className="restaurant">
                <img src={props.image} alt="Image" />
                <div className="item-parent">

                    <div className="item1">
                        <div style={{ fontSize: "1.1rem", color: "rgb(35, 35, 35)" }}>{props.shopName}</div>
                        {/* <div style={{ fontSize: "0.9rem", color: "gray" }}>{`${props.aboutShop.slice(0, 18)}...`}</div> */}
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{props.aboutShop ? `${props.aboutShop.slice(0, 18)}...` : ''}</div>
                    </div>

                    <div className="item2">
                        <div style={{ fontSize: "0.9rem", color: "#fff", backgroundColor: "#248544", padding: "1px 6px", borderRadius: "6px" }}>{`${props.rating}★`}</div>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`₹${props.price} for one`}</div>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`${props.time} min`}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RestaurantList