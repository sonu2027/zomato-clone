import "./RestaurantList.css"
function RestaurantList(props) {
    return (
        <>
            <div className="restaurant">
                <img src={props.image} alt="Image" />
                <div className="item-parent">
                    <div className="item">
                        <div>{props.shopName}</div>
                        <div>{`${props.aboutShop.slice(0,28)}...`}</div>
                    </div>
                    <div className="item">
                        <div>{props.Rating}</div>
                        <div>{props.price}</div>
                        <div>{props.time}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RestaurantList