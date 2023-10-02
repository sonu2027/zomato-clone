import "./RestaurantList.css"
function RestaurantList(props) {
    return (
        <>
            <div className="restaurant-image">
                <img src={props.image} alt="Image" />
            </div>
        </>
    )
}
export default RestaurantList