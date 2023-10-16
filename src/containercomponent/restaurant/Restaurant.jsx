import "./Restaurant.css"

import RestaurantList from "../../component/restaurantlist/RestaurantList"
import { useEffect, useState } from "react"

function Restaurant({ status, img, shopName, aboutShop, rating, price, time, title, calling, distance, address, inputvalue }) {

    const [elFound, setElFound] = useState(false)
    const [numberOfElementFound, setNumberOfElementFound] = useState([])

    useEffect(() => {
        let x = false;
        setNumberOfElementFound([])
        shopName.map((e, i) => {
            // if (e.toUpperCase() == inputvalue.toUpperCase()) {
            //     console.log("element found")
            //     setNumberOfElementFound([i])
            //     setElFound(true)
            //     x = true
            // }
            // else if (
            //     e.slice(0,1).toUpperCase() == inputvalue.toUpperCase() ||
            //     e.slice(0,2).toUpperCase() == inputvalue.toUpperCase()  ||
            //     e.slice(0,3).toUpperCase() == inputvalue.toUpperCase()  ||
            //     e.slice(0,4).toUpperCase() == inputvalue.toUpperCase()  
            // ) {
            //     console.log("element found")
            //     setNumberOfElementFound((s) => [...s, i])
            //     x = true
            // }
            // else if (e.toUpperCase().startsWith(inputvalue.toUpperCase())) {
            //     console.log("element found")
            //     setNumberOfElementFound((s) => [...s, i])
            //     x = true
            // }
            // else {
            //     console.log("not matched any");
            // }
            if (e.toUpperCase().startsWith(inputvalue.toUpperCase())) {
                console.log("element found")
                setNumberOfElementFound((s) => [...s, i])
                x = true
            }
        })
        if (x == true) {
            setElFound(true)
        }
        else {
            setElFound(true)
            setNumberOfElementFound([])
        }
    }, [inputvalue])

    console.log("numberOfElementFound", numberOfElementFound);

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
                                            {
                                                numberOfElementFound.map((e, i) =>
                                                    <RestaurantList
                                                        key={e}
                                                        image={img[e]}
                                                        shopName={shopName[e]}
                                                        aboutShop={aboutShop[e]}
                                                        rating={rating[e].toFixed(1)}
                                                        price={price[e]}
                                                        time={time[e]}
                                                        calling={calling}
                                                        status={status}

                                                    />
                                                )
                                            }
                                        </> :
                                        <>
                                            {
                                                calling == "dining-out" ?
                                                    <>
                                                        {
                                                            numberOfElementFound.map((e, i) =>
                                                                <RestaurantList
                                                                    key={e}
                                                                    image={img[e]}
                                                                    shopName={shopName[e]}
                                                                    aboutShop={aboutShop[e]}
                                                                    rating={rating[e].toFixed(1)}
                                                                    price={price[e]}
                                                                    calling={calling}
                                                                    distance={distance[e]}
                                                                    address={address[e]}
                                                                    status={status}

                                                                />
                                                            )
                                                        }
                                                    </> :
                                                    <>
                                                        <>
                                                            {
                                                                numberOfElementFound.map((e, i) =>
                                                                    <RestaurantList
                                                                        key={e}
                                                                        image={img[e]}
                                                                        shopName={shopName[e]}
                                                                        aboutShop={aboutShop[e]}
                                                                        rating={rating[e]}
                                                                        price={price[e]}
                                                                        calling={calling}
                                                                        distance={distance[e]}
                                                                        address={address[e]}
                                                                        status={status}

                                                                    />
                                                                )
                                                            }
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