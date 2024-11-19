import "./DiningOut.css"
import "../homepage/HomePage.css"

// importing components
import Header from "../../containercomponent/header/Header"
import Section from "../../containercomponent/section/Section"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import Filter from "../../component/filters/Filter"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"

// importing default hooks
import { useParams } from "react-router-dom"
import { useState } from "react"

import FilterOption from "../../component/filteroption/FilterOption"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import OrderStatus from "../../component/orderStatus/OrderStatus.jsx"


function DiningOut() {

    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const order = useSelector((s) => s.order)
    const restaurant = useSelector((s) => s.allRestaurant)
    console.log("Restaurant fetched from store: ", restaurant);
    useEffect(() => {
        let newArr = []
        restaurant.data.map((e, i) => {
            if (e.restaurant_type[0] == "Dinie-in" || (e.restaurant_type[1] && e.restaurant_type[1] == "Dinie-in") || (e.restaurant_type[2] && e.restaurant_type[2] == "Dinie-in")) {
                console.log("e.name: ", e.restaurant_name);
                newArr.push(e)
            }
        })
        setFilteredRestaurant(newArr)
    }, [])

    // default hooks
    const { status } = useParams()
    const [inputval, setInputval] = useState("")

    const [filter, setFilter] = useState(false)

    function handleFilter() {
        if (filter == true) {
            document.body.style.overflow = "visible"
        }
        else {
            document.body.style.overflow = "hidden"
        }
        setFilter(!filter)
    }

    window.addEventListener("click", () => {
        if (filter) {
            setFilter(false)
        }
        setInputval("")
    })


    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

    return (
        <>
            <Header search={handleSearch} emptySearch={setInputval} status={status} />
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <SerachRestaurant inputvalue={inputval} status={status} calling="dining-out" restaurant={filteredRestaurant} />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Section status={status} page="dining-out" />
            {inputval}
            <Filter setFilter={handleFilter} />
            {
                filter && <FilterOption passing={"diningout"} setFilter={handleFilter} />
            }

            <Restaurant status={status} rating={[4, 3, 2, 3, 5]} title={"Trending dining restaurants in Jagannath Nagar, Bangashree Pally, Maheshtala"} calling="dining-out" restaurant={filteredRestaurant} />
            {
                order.data.length>0 && <OrderStatus />
            }
        </>
    )
}
export default DiningOut