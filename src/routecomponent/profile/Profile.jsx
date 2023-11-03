import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"
import "./Profile.css"
import { useState } from "react"
// importing custom hooks
import useHomepageAsset from "../../hooks/useHomepageAssets"
import Footer from "../../component/footer/Footer"

function Profile() {
    let obj = useHomepageAsset()
    const { status } = useParams()
    const [inputval, setInputval] = useState("")
    function handleSearch(e) {
        if (e != "") {
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
            <h1 style={{margin:"2rem 7vw"}}>In developing phase</h1>
            <Footer />
        </>
    )
}

export default Profile