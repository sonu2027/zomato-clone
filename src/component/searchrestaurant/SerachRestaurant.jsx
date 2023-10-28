import "./SerachRestaurant.css"
import { useEffect, useState } from "react"
import SearchRestaurantList from "../searchrestaurantlist/SearchRestaurantList"

function SerachRestaurant({ status, img, shopName, aboutShop, rating, price, time, title, calling, distance, address, inputvalue }) {
    
    const [elFound, setElFound] = useState(false)
    const [numberOfElementFound, setNumberOfElementFound] = useState([])

    useEffect(() => {
        let x = false;
        setNumberOfElementFound([])
        shopName.map((e, i) => {
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
                                                    <SearchRestaurantList
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
                                                                <SearchRestaurantList
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
                                                                    <SearchRestaurantList
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
                                <h1>Couldn't found any restaurant</h1>
                            </>
                    }
                </div>
            </div>
        </>
    )
}
export default SerachRestaurant