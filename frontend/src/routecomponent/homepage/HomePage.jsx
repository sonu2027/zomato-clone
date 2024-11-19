// importing css for homepage
import "./HomePage.css"

// importing components
import Header from "../../containercomponent/header/Header"
import ProductType from "../../containercomponent/producttype/ProductType"
import TopBrand from "../../containercomponent/topbrands/TopBrand"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import Section from "../../containercomponent/section/Section"
import Filter from "../../component/filters/Filter"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"
import { useContext, useEffect, useState } from "react"

import FilterOption from "../../component/filteroption/FilterOption"
import applyFilter from "../../context/applyFilter"
import { useSelector } from "react-redux"
import OrderStatus from "../../component/orderStatus/OrderStatus.jsx"

function HomePage() {

    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const restaurant = useSelector((s) => s.allRestaurant)
    const order = useSelector((s) => s.order)
    console.log("Restaurant fetched from store: ", restaurant);

    const { toApply, setApply } = useContext(applyFilter)
    const [brand, setBrand] = useState(true)

    useEffect(() => {
        let newArr = []
        restaurant.data.map((e, i) => {
            if (e.restaurant_type[0] == "Delivery" || (e.restaurant_type[1] && e.restaurant_type[1] == "Delivery") || (e.restaurant_type[2] && e.restaurant_type[2] == "Delivery")) {
                newArr.push(e)
            }
        })
        setFilteredRestaurant(newArr)
    }, [])

    useEffect(() => {
        if (toApply[0] != "Popularity") {
            setBrand(false)
        }
        else if (toApply[1] > 0) {
            setBrand(false)
        }
        else if (toApply[2] > 0) {
            setBrand(false)
        }
        else {
            setBrand(true)
        }
    }, [toApply])

    // default hooks
    // const { status } = useParams()
    const [inputval, setInputval] = useState("")
    const [filter, setFilter] = useState(false)


    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

    function handleFilter(e) {
        if (filter == true) {
            document.body.style.overflow = "visible"
        }
        else {
            document.body.style.overflow = "hidden"
        }
        setFilter(!filter)
    }

    window.addEventListener("click", () => {
        console.log("clicked on window: ", filter);
        if (filter) {
            setFilter(false)
            document.body.style.overflow = "visible"
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
                            <SerachRestaurant inputvalue={inputval} status={status || 0} calling="delivery" restaurant={filteredRestaurant} />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Section status={status} page={"delivery"} />
            <Filter setFilter={handleFilter} />
            {
                filter && <FilterOption passing={"delivery"} setFilter={handleFilter} />
            }
            {
                brand &&
                <>
                    <ProductType />
                    <TopBrand status={status} />
                </>
            }

            <Restaurant status={status || 0} title={"Best Restaurant in Kolkata"} rating={[4, 3, 2, 3, 5]} calling="delivery" restaurant={filteredRestaurant} />
            {
                order.data.length>0 && <OrderStatus />
            }
        </>
    )
}
export default HomePage