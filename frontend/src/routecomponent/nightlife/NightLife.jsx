import "./NightLife"
import "../nightlife/NightLife.css"

// importing component
import Header from "../../containercomponent/header/Header"
import Section from "../../containercomponent/section/Section"
import Filter from "../../component/filters/Filter"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"

// importing default hooks
import { useParams } from "react-router-dom"
import { useState } from "react"

import FilterOption from "../../component/filteroption/FilterOption"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import OrderStatus from "../../component/orderStatus/OrderStatus.jsx"

function NightLife() {

    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const order = useSelector((s) => s.order)
    const restaurant = useSelector((s) => s.allRestaurant)
    console.log("Restaurant fetched from store: ", restaurant);
    useEffect(() => {
        let newArr = []
        restaurant.data.map((e, i) => {
            if (e.restaurant_type[0] == "Nightlife" || (e.restaurant_type[1] && e.restaurant_type[1] == "Nightlife") || (e.restaurant_type[2] && e.restaurant_type[2] == "Nightlife")) {
                newArr.push(e)
            }
        })
        setFilteredRestaurant(newArr)
    }, [])

    // default hooks
    const { status } = useParams()
    const [inputval, setInputval] = useState("")


    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

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

    return (
        <>
            <Header search={handleSearch} emptySearch={setInputval} status={status} />
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <SerachRestaurant inputvalue={inputval} calling={"nightLife"} status={status} restaurant={filteredRestaurant} />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Section status={status} page="night-life" />
            <Filter setFilter={handleFilter} />
            {
                filter && <FilterOption passing={"nightlife"} setFilter={handleFilter} />
            }
            <Restaurant status={status} rating={[4, 3, 2, 3, 5]} title={"Nightlife Restaurants in Behala"} calling="night-life" restaurant={filteredRestaurant} />
            {
                order.data.length>0 && <OrderStatus />
            }
        </>
    )
}
export default NightLife