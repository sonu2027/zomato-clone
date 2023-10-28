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
import { useState } from "react"

// importing custom hooks
import useHomepageAsset from "../../hooks/useHomepageAssets"


function HomePage() {

    // custom hooks
    let obj=useHomepageAsset()

    // default hooks
    const { status } = useParams()
    const [inputval, setInputval] = useState("")

    function handleSearch(e) {
        if(e!=""){
            setInputval(e.target.value)
        }
    }

    return (
        <>
            <Header search={handleSearch} status={status} />
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
            <Filter />
            <ProductType />
            <TopBrand />
            <Restaurant inputvalue={inputval} status={status || 0} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} time={obj.time} title={"Best Restaurant in Kolkata"} calling="delivery" />
            <Footer />
        </>
    )
}
export default HomePage