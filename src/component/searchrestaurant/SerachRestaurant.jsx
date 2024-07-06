import "./SerachRestaurant.css"
import { useEffect, useState } from "react"
import SearchRestaurantList from "../searchrestaurantlist/SearchRestaurantList"

function SerachRestaurant({ status, calling, inputvalue, restaurant }) {

    const [elFound, setElFound] = useState(false)
    const [numberOfElementFound, setNumberOfElementFound] = useState([])

    useEffect(() => {
        let x = false;
        setNumberOfElementFound([])
        restaurant.map((e, i) => {
            if (e.restaurant_name.toUpperCase().startsWith(inputvalue.toUpperCase())) {
                console.log("element found")
                setNumberOfElementFound((s) => [...s, e])
                x = true
            }
        })
        if (x == true) {
            setElFound(true)
        }
        else {
            setElFound(false)
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

                            numberOfElementFound.map((e, i) =>
                                <SearchRestaurantList
                                    key={e._id}
                                    id={e._id}
                                    image={e.restaurant_image_URL}
                                    shopName={e.restaurant_name}
                                    cuisines={e.cuisines}
                                    rating={e.rating || 0}
                                    price={e.price || 0}
                                    time={0}
                                    calling={calling}
                                    status={status}
                                />

                            )
                            :
                            <h3>Couldn't found any restaurant</h3>
                    }
                </div>
            </div>
        </>
    )
}
export default SerachRestaurant