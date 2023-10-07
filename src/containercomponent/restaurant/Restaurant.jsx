import "./Restaurant.css"

import RestaurantList from "../../component/restaurantlist/RestaurantList"

function Restaurant({img, shopName, aboutShop, rating, price, time, title}) {
   
    return (
        <>
            <div id="restaurant-image-main-div">
                <span>{title}</span>
                <div className="restaurant-image">
                    {
                        img.map((e, i) => <RestaurantList
                            key={e}
                            image={img[i]}
                            shopName={shopName[i]}
                            aboutShop={aboutShop[i]}
                            rating={rating[i].toFixed(1)}
                            price={price[i]}
                            time={time[i]}
                        />)
                    }
                </div>
            </div>
        </>
    )
}
export default Restaurant