import "./Restaurant.css"

import RestaurantList from "../../component/restaurantlist/RestaurantList"

function Restaurant({ status, img, shopName, aboutShop, rating, price, time, title, calling, distance, address }) {

    return (
        <>
            <div id="restaurant-image-main-div">
                <span>{title}</span>
                <div className="restaurant-image">
                    {
                        calling == "delivery" ?
                            img.map((e, i) => <RestaurantList
                                key={e}
                                image={img[i]}
                                shopName={shopName[i]}
                                aboutShop={aboutShop[i]}
                                rating={rating[i].toFixed(1)}
                                price={price[i]}
                                time={time[i]}
                                calling={calling}
                                status={status}
                            />) :
                            img.map((e, i) => <RestaurantList
                                key={e}
                                image={img[i]}
                                shopName={shopName[i]}
                                aboutShop={aboutShop[i]}
                                rating={rating[i].toFixed(1)}
                                price={price[i]}
                                calling={calling}
                                distance={distance[i]}
                                address={address[i]}
                                status={status}
                            />)
                    }
                </div>
            </div>
        </>
    )
}
export default Restaurant