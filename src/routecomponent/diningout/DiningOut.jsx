import "./DiningOut.css"
import "../homepage/HomePage.css"

// importing components
import Header from "../../containercomponent/header/Header"
import Section from "../../containercomponent/section/Section"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import Filter from "../../component/filters/Filter"
import Footer from "../../component/footer/Footer"
import DiscountImage from "../../component/discountimage/DiscountImage"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"

// importing custom hooks
import useDiningoutPageAsset from "../../hooks/useDiningoutPageAsset"

// importing default hooks
import { useParams } from "react-router-dom"
import { useState } from "react"

import FilterOption from "../../component/filteroption/FilterOption"


function DiningOut() {

    // custom hooks
    const obj = useDiningoutPageAsset()

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
                            <SerachRestaurant inputvalue={inputval} status={status} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} distance={obj.distance} address={obj.address} title={"Trending dining restaurants in Jagannath Nagar, Bangashree Pally, Maheshtala"} calling="dining-out" />
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
            <DiscountImage />
            <Restaurant inputvalue={inputval} status={status} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} distance={obj.distance} address={obj.address} title={"Trending dining restaurants in Jagannath Nagar, Bangashree Pally, Maheshtala"} calling="dining-out" />
            <Footer />
        </>
    )
}
export default DiningOut