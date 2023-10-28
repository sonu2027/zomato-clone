import {useState, useContext } from "react"
import bookmark from "../../context/bookmark"
import Header from "../../containercomponent/header/Header"
import "./BookmarkPage.css"

import Footer from "../../component/footer/Footer"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"

import useHomepageAsset from "../../hooks/useHomepageAssets"

function BookmarkPage() {

    // custom hooks
    const obj=useHomepageAsset()
    // useContext
    const { bookmarks, setBookmarks } = useContext(bookmark)

    console.log("bookmarks in bookmark page: ", bookmarks);
    const [inputval, setInputval] = useState("")
    function handleSearch(e) {
        if(e!=""){
            setInputval(e.target.value)
        }
    }

    return (
        <div>
            <Header search={handleSearch} status={1}/>
            {bookmarks.map((e) => <div key={e}>{e}</div>)}
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <SerachRestaurant inputvalue={inputval} status={1} img={obj.img} shopName={obj.shopName} aboutShop={obj.aboutShop} rating={obj.rating} price={obj.price} time={obj.time} title={"Best Restaurant in Kolkata"} calling="delivery" />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Footer/>
        </div>
    )
}

export default BookmarkPage