// importing css
import "./ProductListing.css"
import "../homepage/HomePage.css";

// importing components
import Header from "../../containercomponent/header/Header";
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant";
import ProductSection from "../../component/productlistingsectionbutton/ProductSection";
import AboutProductListing from "../../component/aboutproductlisting/AboutProductListing";

// importing useContext hooks
import bookmark from "../../context/bookmark";

// importing routing
import { Link } from "react-router-dom";

// importing default hooks
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

// importing custom hooks
import useHomepageAsset from "../../hooks/useHomepageAssets";
import useDiningoutPageAsset from "../../hooks/useDiningoutPageAsset";
import useNightlifePageAsset from "../../hooks/useNightlifePageAsset";
import ProductListingButton from "../../component/productlistingbutton/ProductListingButton";

function ProductListing() {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);

    // Access individual query parameters
    const status = queryParams.get('status');
    const shopName = queryParams.get('shopName');
    const rating = queryParams.get('rating');
    const price = queryParams.get('price');
    const time = queryParams.get('time');
    const calling = queryParams.get('calling')

    const address = queryParams.get('address')
    const distance = queryParams.get('distance')
    const image = queryParams.get('img')
    const aboutShop = queryParams.get('aboutShop')
    const arr = aboutShop.split(/\s*,\s*/);

    // default hooks
    const [inputval, setInputval] = useState("")

    // custom hooks
    const obj1 = useHomepageAsset()
    const obj2 = useDiningoutPageAsset()
    const obj3 = useNightlifePageAsset()

    function handleSearch(e) {
        if (e == "") {
            setInputval("")
        }
        else {
            setInputval(e.target.value)
        }
    }

    console.log("props.search", inputval);

    const { bookmarks, setBookmarks } = useContext(bookmark)
    const [bookmarked, setBookmarked] = useState(false)

    useEffect(()=>{
        bookmarks.map((e)=>{
            if(e==shopName)
                setBookmarked(true)
        })
    },[])

    function handleBookmark() {
        let foundItem = false
        if (!bookmarked) {
            foundItem = bookmarks.filter((e) => {
                if (e == shopName)
                    return true
            })
            if (foundItem == false)
                setBookmarks((s) => [...s, shopName])
        }
        else {
            foundItem = bookmarks.filter((e) => {
                return e != shopName
            })
            setBookmarks(foundItem)
        }
        setBookmarked(!bookmarked)
    }
    console.log("bookmarks: ", bookmarks);
    console.log("bookmarked: ", bookmarked);


    return (
        <>
            {calling == "delivery" ?
                <>
                    <Header search={handleSearch} status={status} />
                    {
                        inputval != "" ?
                            <>
                                <div className="search-box">
                                    <div onClick={() => { setInputval(""), setBookmarked(false) }}>
                                        <SerachRestaurant inputvalue={inputval} status={status || 0} img={obj1.img} shopName={obj1.shopName} aboutShop={obj1.aboutShop} rating={obj1.rating} price={obj1.price} time={obj1.time} title={"Best Restaurant in Kolkata"} calling="delivery" />
                                    </div>
                                </div>
                            </> :
                            <>
                            </>
                    }
                    <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                    <div className="all-about-restaurant">
                        <AboutProductListing
                            image={image} shopName={shopName}
                            aboutShop={aboutShop} rating={rating}
                        />
                        <ProductListingButton
                            status={status} bookmarked={bookmarked}
                            handleBookmark={handleBookmark}
                        />
                        <ProductSection arr={arr} />

                    </div>
                </> :
                <>
                    {
                        calling == "dining-out" ?
                            <>
                                <Header search={handleSearch} status={status} />
                                {
                                    inputval != "" ?
                                        <>
                                            <div className="search-box">
                                                <div onClick={() => { setInputval(""), setBookmarked(false) }}>
                                                    <SerachRestaurant inputvalue={inputval} status={status || 0} img={obj2.img} shopName={obj2.shopName} aboutShop={obj2.aboutShop} rating={obj2.rating} price={obj2.price} distance={obj2.distance} title={"Best Restaurant in Kolkata"} address={obj2.address} calling="dining-out" />
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }

                                <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                                <div className="all-about-restaurant">
                                    <AboutProductListing
                                        image={image} shopName={shopName}
                                        aboutShop={aboutShop} rating={rating}
                                        address={address}
                                    />
                                    <ProductListingButton
                                        status={status} bookmarked={bookmarked}
                                        handleBookmark={handleBookmark}
                                    />
                                    <ProductSection arr={arr} />
                                </div>
                            </> :
                            <>
                                <Header search={handleSearch} status={status} />
                                {
                                    inputval != "" ?
                                        <>
                                            <div className="search-box">
                                                <div onClick={() => { setInputval(""), setBookmarked(false) }}>
                                                    <SerachRestaurant inputvalue={inputval} status={status || 0} img={obj3.img} shopName={obj3.shopName} aboutShop={obj3.aboutShop} rating={obj3.rating} price={obj3.price} title={"Best Restaurant in Kolkata"} calling="night-life" distance={obj3.distance} address={obj3.address} />
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }

                                <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                                <div className="all-about-restaurant">
                                    <AboutProductListing
                                        image={image} shopName={shopName}
                                        aboutShop={aboutShop} address={address} rating={rating}
                                    />
                                    <ProductListingButton
                                        status={status} bookmarked={bookmarked}
                                        handleBookmark={handleBookmark}
                                    />
                                    <ProductSection arr={arr} />
                                </div>
                            </>
                    }
                </>
            }
        </>
    )
}
export default ProductListing