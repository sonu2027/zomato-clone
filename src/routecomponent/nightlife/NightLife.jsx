import "./NightLife"
import "../nightlife/NightLife.css"
import DiscountImage from "../../component/discountimage/DiscountImage"

// importing component
import Header from "../../containercomponent/header/Header"
import Section from "../../containercomponent/section/Section"
import Filter from "../../component/filters/Filter"
import Footer from "../../component/footer/Footer"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"

// importing custom hooks
import useNightlifePageAsset from "../../hooks/useNightlifePageAsset"

// importing default hooks
import { useParams } from "react-router-dom"
import { useState } from "react"

import FilterOption from "../../component/filteroption/FilterOption"

function NightLife() {

    // custom hooks
    const obj = useNightlifePageAsset()

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

    return (
        <>
            <Header search={handleSearch} status={status} />
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <SerachRestaurant inputvalue={inputval} status={status} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} distance={obj.distance} address={obj.address} title={"Trending dining restaurants in Jagannath Nagar, Bangashree Pally, Maheshtala"} calling="night-life" />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Section status={status} page="night-life" />
            <Filter setFilter={handleFilter}/>
            {
                filter && <FilterOption passing={"nightlife"} setFilter={handleFilter} />
            }
            <DiscountImage />
            <Restaurant inputvalue={inputval} status={status} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} distance={obj.distance} address={obj.address} title={"Nightlife Restaurants in Behala"} calling="night-life" />
            <Footer />
        </>
    )
}
export default NightLife