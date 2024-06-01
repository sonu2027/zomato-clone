// importing css for homepage
import "./HomePage.css"

// importing components
import Header from "../../containercomponent/header/Header"
import ProductType from "../../containercomponent/producttype/ProductType"
import TopBrand from "../../containercomponent/topbrands/TopBrand"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import Section from "../../containercomponent/section/Section"
import Filter from "../../component/filters/Filter"
import Footer from "../../component/footer/Footer"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"

// importing default hooks
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"

// importing custom hooks
import useHomepageAsset from "../../hooks/useHomepageAssets"
import FilterOption from "../../component/filteroption/FilterOption"
import applyFilter from "../../context/applyFilter"
import { apply } from "file-loader"

function HomePage() {

    const { toApply, setApply } = useContext(applyFilter)
    const [brand, setBrand] = useState(true)

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

    // custom hooks
    let obj = useHomepageAsset()

    // default hooks
    const { status } = useParams()
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
                            <SerachRestaurant inputvalue={inputval} status={status || 0} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} time={obj.time} title={"Best Restaurant in Kolkata"} calling="delivery" />
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

            <Restaurant inputvalue={inputval} status={status || 0} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} time={obj.time} title={"Best Restaurant in Kolkata"} calling="delivery" />
            <Footer />
        </>
    )
}
export default HomePage