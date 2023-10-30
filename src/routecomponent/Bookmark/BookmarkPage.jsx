// importing css
import "./BookmarkPage.css"

// importing component
import Footer from "../../component/footer/Footer"
import Header from "../../containercomponent/header/Header"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"
import Restaurant from "../../containercomponent/restaurant/Restaurant"

// importing custom hooks
import useHomepageAsset from "../../hooks/useHomepageAssets"
import useNightlifePageAsset from "../../hooks/useNightlifePageAsset"

// importing default hooks
import { useState, useContext, useEffect } from "react"

// importing usecontexthooks
import bookmark from "../../context/bookmark"

function BookmarkPage() {

    // default hooks
    let [img1, setImg1] = useState([])
    let [shopName1, setShopName1] = useState([])
    let [aboutShop1, setAboutShop1] = useState([])
    let [rating1, setRating1] = useState([])
    let [price1, setPrice1] = useState([])
    let [time1, setTime1] = useState([])

    let [img3, setImg3] = useState([])
    let [shopName3, setShopName3] = useState([])
    let [aboutShop3, setAboutShop3] = useState([])
    let [rating3, setRating3] = useState([])
    let [price3, setPrice3] = useState([])
    let [distance3, setDistance3] = useState([])
    let [address3, setAddress3] = useState([])

    // useContext hooks
    const { bookmarks, setBookmarks } = useContext(bookmark)

    // custom hooks
    const obj1 = useHomepageAsset()
    const obj3 = useNightlifePageAsset()

    const [inputval, setInputval] = useState("")
    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

    function showBookmark() {
        bookmarks.map((element, index) => {
            obj1.shopName.map((el, ind) => {
                if (element == el) {
                    console.log("downloading1 bookmark");
                    setImg1((s) => [...s, obj1.img[ind]])
                    setShopName1((s) => [...s, obj1.shopName[ind]])
                    setAboutShop1((s) => [...s, obj1.aboutShop[ind]])
                    setRating1((s) => [...s, obj1.rating[ind]])
                    setPrice1((s) => [...s, obj1.price[ind]])
                    setTime1((s) => [...s, obj1.time[ind]])
                }
            })

            obj3.shopName.map((el, ind) => {
                if (element == el) {
                    console.log("downloading1 bookmark");
                    setImg3((s) => [...s, obj3.img[ind]])
                    setShopName3((s) => [...s, obj3.shopName[ind]])
                    setAboutShop3((s) => [...s, obj3.aboutShop[ind]])
                    setRating3((s) => [...s, obj3.rating[ind]])
                    setPrice3((s) => [...s, obj3.price[ind]])
                    setDistance3((s) => [...s, obj3.distance[ind]])
                    setAddress3((s) => [...s, obj3.address[ind]])
                }
            })
        })
    }


    useEffect(() => {
        showBookmark()
    }, [])

    return (
        <div>
            <Header search={handleSearch} status={1} />
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <SerachRestaurant inputvalue={inputval} status={1} img={obj1.img} shopName={obj1.shopName} aboutShop={obj1.aboutShop} rating={obj1.rating} price={obj1.price} time={obj1.time} title={"Best Restaurant in Kolkata"} calling="delivery" />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Restaurant inputvalue="" status={1} img={img1} shopName={shopName1} aboutShop={aboutShop1} rating={rating1} price={price1} time={time1} title={"Bookmarks"} calling="delivery" />

            <Restaurant inputvalue="" status={1} img={img3} shopName={shopName3} aboutShop={aboutShop3} rating={rating3} price={price3} distance={distance3} address={address3} title={""} calling="dining-out" />



            <Footer />
        </div>
    )
}

export default BookmarkPage