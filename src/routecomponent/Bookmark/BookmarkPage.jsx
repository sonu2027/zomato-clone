// importing css
import "./BookmarkPage.css"

// importing component
import Footer from "../../component/footer/Footer"
import Header from "../../containercomponent/header/Header"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"
import Restaurant from "../../containercomponent/restaurant/Restaurant"

// importing custom hooks
import useHomepageAsset from "../../hooks/useHomepageAssets"
import useDiningoutPageAsset from "../../hooks/useDiningoutPageAsset"
import useNightlifePageAsset from "../../hooks/useNightlifePageAsset"
import useTopBrandAsset from "../../hooks/useTopBrandAsset"

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

    let [img2, setImg2] = useState([])
    let [shopName2, setShopName2] = useState([])
    let [aboutShop2, setAboutShop2] = useState([])
    let [rating2, setRating2] = useState([])
    let [price2, setPrice2] = useState([])
    let [distance2, setDistance2] = useState([])
    let [address2, setAddress2] = useState([])

    let [img3, setImg3] = useState([])
    let [shopName3, setShopName3] = useState([])
    let [aboutShop3, setAboutShop3] = useState([])
    let [rating3, setRating3] = useState([])
    let [price3, setPrice3] = useState([])
    let [distance3, setDistance3] = useState([])
    let [address3, setAddress3] = useState([])

    let [img4, setImg4] = useState([])
    let [shopName4, setShopName4] = useState([])
    let [aboutShop4, setAboutShop4] = useState([])
    let [rating4, setRating4] = useState([])
    let [price4, setPrice4] = useState([])
    let [time4, setTime4] = useState([])

    // useContext hooks
    const { bookmarks, setBookmarks } = useContext(bookmark)

    // custom hooks
    const obj1 = useHomepageAsset()
    const obj2 = useDiningoutPageAsset()
    const obj3 = useNightlifePageAsset()
    const obj4 = useTopBrandAsset()

    const [inputval, setInputval] = useState("")
    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

    function showBookmark() {
        let prev_el = ""
        bookmarks.map((element, index) => {
            obj1.shopName.map((el, ind) => {
                if (element == el && element != prev_el) {
                    console.log("downloading1 bookmark");
                    setImg1((s) => [...s, obj1.img[ind]])
                    setShopName1((s) => [...s, obj1.shopName[ind]])
                    setAboutShop1((s) => [...s, obj1.aboutShop[ind]])
                    setRating1((s) => [...s, obj1.rating[ind]])
                    setPrice1((s) => [...s, obj1.price[ind]])
                    setTime1((s) => [...s, obj1.time[ind]])
                    prev_el = element
                }
            })

            obj2.shopName.map((el, ind) => {
                if (element == el && element != prev_el) {
                    console.log("downloading1 bookmark");
                    setImg3((s) => [...s, obj2.img[ind]])
                    setShopName3((s) => [...s, obj2.shopName[ind]])
                    setAboutShop3((s) => [...s, obj2.aboutShop[ind]])
                    setRating3((s) => [...s, obj2.rating[ind]])
                    setPrice3((s) => [...s, obj2.price[ind]])
                    setDistance3((s) => [...s, obj2.distance[ind]])
                    setAddress3((s) => [...s, obj2.address[ind]])
                    prev_el = element
                }
            })

            obj3.shopName.map((el, ind) => {
                if (element == el && element != prev_el) {
                    console.log("downloading1 bookmark");
                    setImg3((s) => [...s, obj3.img[ind]])
                    setShopName3((s) => [...s, obj3.shopName[ind]])
                    setAboutShop3((s) => [...s, obj3.aboutShop[ind]])
                    setRating3((s) => [...s, obj3.rating[ind]])
                    setPrice3((s) => [...s, obj3.price[ind]])
                    setDistance3((s) => [...s, obj3.distance[ind]])
                    setAddress3((s) => [...s, obj3.address[ind]])
                    prev_el = element
                }
            })

            obj4.productType.map((el, ind) => {
                if (element == el && element != prev_el) {
                    console.log("downloading1 bookmark");
                    setImg4((s) => [...s, obj4.productTypeImage[ind]])
                    setShopName4((s) => [...s, obj4.productType[ind]])
                    setAboutShop4((s) => [...s, obj4.aboutProduct[ind]])
                    setRating4((s) => [...s, obj4.rating[ind]])
                    setPrice4((s) => [...s, obj4.price[ind]])
                    setTime4((s) => [...s, obj4.time[ind]])
                    prev_el = element
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

            <Restaurant inputvalue="" status={1} img={img1} shopName={shopName1} aboutShop={aboutShop1} rating={rating1} price={price1} time={time1} title={
                img1.length > 0 || img2.length > 0 || img3.length > 0 || img4.length > 0 ? "Bookmarks" : "You haven't add any restaurant to bookmark"
            } calling="delivery" bookmarkcontent={true}/>

            {
                shopName4.length > 0 ?
                    <Restaurant inputvalue="" status={1} img={img4} shopName={shopName4} aboutShop={aboutShop4} rating={rating4} price={price4} time={time4} title={""} calling="delivery" bookmarkcontent={true}/> : null
            }

            {
                shopName2.length > 0 ?
                    <Restaurant inputvalue="" status={1} img={img2} shopName={shopName2} aboutShop={aboutShop2} rating={rating2} price={price2} distance={distance2} address={address2} title={""} calling="dining-out" bookmarkcontent={true}/> : null
            }
            <Restaurant inputvalue="" status={1} img={img3} shopName={shopName3} aboutShop={aboutShop3} rating={rating3} price={price3} distance={distance3} address={address3} title={""} calling="night-life" bookmarkcontent={true}/>

            <Footer />
        </div>
    )
}

export default BookmarkPage