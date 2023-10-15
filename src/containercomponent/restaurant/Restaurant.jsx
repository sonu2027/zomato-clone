import "./Restaurant.css"

import RestaurantList from "../../component/restaurantlist/RestaurantList"
import { useEffect, useState } from "react"

function Restaurant({ status, img, shopName, aboutShop, rating, price, time, title, calling, distance, address, inputvalue }) {

    const [elFound, setElFound] = useState(false)
    const [element, setElement] = useState("")
    const [index, setIndex] = useState(0)

    function executeElement(e, i) {
        setElement(e)
        setIndex(i)
        setElFound(true)
    }

    useEffect(() => {
        shopName.map((e, i) => {
            if (e == inputvalue) {
                console.log("element found")
                executeElement(e, i)
            }
        })
    }, [inputvalue])

    return (
        <>
            <div id="restaurant-image-main-div">
                <span>{title}</span>
                <div className="restaurant-image">
                    {
                        elFound == true && inputvalue != "" ?
                            <>
                                {console.log("element found")}
                                {
                                    calling == "delivery" ?
                                        <>
                                            <RestaurantList
                                                key={element}
                                                image={img[index]}
                                                shopName={shopName[index]}
                                                aboutShop={aboutShop[index]}
                                                rating={rating[index].toFixed(1)}
                                                price={price[index]}
                                                time={time[index]}
                                                calling={calling}
                                                status={status}

                                            />
                                        </> :
                                        <>
                                            {
                                                calling == "dining-out" ?
                                                    <>
                                                        <RestaurantList
                                                            key={element}
                                                            image={img[index]}
                                                            shopName={shopName[index]}
                                                            aboutShop={aboutShop[index]}
                                                            rating={rating[index].toFixed(1)}
                                                            price={price[index]}
                                                            calling={calling}
                                                            distance={distance[index]}
                                                            address={address[index]}
                                                            status={status}

                                                        />
                                                    </> :
                                                    <>
                                                        <>
                                                            <RestaurantList
                                                                key={element}
                                                                image={img[index]}
                                                                shopName={shopName[index]}
                                                                aboutShop={aboutShop[index]}
                                                                rating={rating[index].toFixed(1)}
                                                                price={price[index]}
                                                                calling={calling}
                                                                distance={distance[index]}
                                                                address={address[index]}
                                                                status={status}

                                                            />
                                                        </>
                                                    </>
                                            }
                                        </>
                                }
                            </> :
                            <>
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
                            </>
                    }
                </div>
            </div>
        </>
    )
}
export default Restaurant