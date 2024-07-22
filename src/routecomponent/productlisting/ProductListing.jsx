// importing css
import "./ProductListing.css"
import "../homepage/HomePage.css";

// importing components
import Header from "../../containercomponent/header/Header";
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant";
import ProductSection from "../../component/productlistingsectionbutton/ProductSection";
import AboutProductListing from "../../component/aboutproductlisting/AboutProductListing";

// importing default hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

// importing custom hooks
import ProductListingButton from "../../component/productlistingbutton/ProductListingButton";
import { updateCustomerDetails } from "../../databaseCall/updateCustomerDetails";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer } from "../../databaseCall/customerlogin";
import { setCustomerDetail } from "../../store/customerSlice";
import OrderStatus from "../../component/orderStatus/OrderStatus";

function ProductListing() {

    const order = useSelector((s) => s.order)
    console.log("order in product listine: ", order);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [bookmarked, setBookmarked] = useState(false)

    const restaurant = useSelector((s) => s.allRestaurant)

    const dispatch = useDispatch()
    const location = useLocation()

    const customerDetails = useSelector((s) => s.customer.data)

    const queryParams = new URLSearchParams(location.search);

    // Access individual query parameters
    const id = queryParams.get('id');
    const status = queryParams.get('status');
    const shopName = queryParams.get('shopName');
    const rating = queryParams.get('rating');
    const calling = queryParams.get('calling')

    const address = queryParams.get('address')
    const image = queryParams.get('img')
    const aboutShop = queryParams.get('aboutShop')
    const arr = aboutShop.split(/\s*,\s*/);

    // default hooks
    const [inputval, setInputval] = useState("")

    useEffect(() => {
        console.log("1st one is running");
        let newArr = []
        if (calling == "delivery") {
            restaurant.data.map((e, i) => {
                if (e.restaurant_type[0] == "Delivery" || (e.restaurant_type[1] && e.restaurant_type[1] == "Delivery") || (e.restaurant_type[2] && e.restaurant_type[2] == "Delivery")) {
                    newArr.push(e)
                }
            })
        }
        else if (calling == "dining-out") {
            restaurant.data.map((e, i) => {
                if (e.restaurant_type[0] == "Dinie-in" || (e.restaurant_type[1] && e.restaurant_type[1] == "Dinie-in") || (e.restaurant_type[2] && e.restaurant_type[2] == "Dinie-in")) {
                    newArr.push(e)
                }
            })
        }
        else {
            restaurant.data.map((e, i) => {
                if (e.restaurant_type[0] == "Nightlife" || (e.restaurant_type[1] && e.restaurant_type[1] == "Nightlife") || (e.restaurant_type[2] && e.restaurant_type[2] == "Nightlife")) {
                    newArr.push(e)
                }
            })
        }
        setFilteredRestaurant(newArr)
    }, [restaurant, calling])

    useEffect(() => {
        console.log("2nd one is running");
        console.log("custom det is: ", customerDetails);
        if (customerDetails.bookmarkedRes) {
            customerDetails.bookmarkedRes.map((e) => {
                console.log("props.resId: ", id);
                if (e == id) {
                    console.log("e and props.resId: ", e, id);
                    setBookmarked(true)
                }
            })
        }
    }, [customerDetails, id, bookmarked])

    function handleSearch(e) {
        if (e == "") {
            setInputval("")
        }
        else {
            setInputval(e.target.value)
        }
    }

    const handleRemoveBookmark = () => {
        updateCustomerDetails("removeBookmark", customerDetails._id, id)
            .then((data) => {
                loginCustomer(customerDetails.email, customerDetails.password)
                    .then((data) => {
                        dispatch(setCustomerDetail(data))
                        setBookmarked(false)
                    })
                    .catch((error) => {
                        throw error
                    })
            })
            .catch((error) => {
                console.log("error is: ", error);
            })
    }

    const handleAddBookmark = () => {
        updateCustomerDetails("bookmark", customerDetails._id, id)
            .then((data) => {
                loginCustomer(customerDetails.email, customerDetails.password)
                    .then((data) => {
                        dispatch(setCustomerDetail(data))
                        setBookmarked(true)
                    })
                    .catch((error) => {
                        throw error
                    })
            })
            .catch((error) => {
                console.log("error is: ", error);
            })
    }

    window.addEventListener("click", () => {
        setInputval("")
    })

    return (
        <>
            {calling == "delivery" ?
                <>
                    <Header search={handleSearch} emptySearch={setInputval} status={status} />
                    {
                        inputval != "" ?
                            <>
                                <div className="search-box">
                                    <div onClick={() => setBookmarked(false)}>
                                        <SerachRestaurant inputvalue={inputval} status={status || 0} calling="delivery" restaurant={filteredRestaurant} />
                                    </div>
                                </div>
                            </> :
                            <>
                            </>
                    }
                    <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                    <div className="all-about-restaurant">
                        <AboutProductListing
                            resId={id}
                            image={image} shopName={shopName}
                            aboutShop={aboutShop} rating={rating}
                        />
                        <ProductListingButton
                            status={status}
                            handleRemoveBookmark={handleRemoveBookmark} handleAddBookmark={handleAddBookmark} setBookmarked={setBookmarked} bookmarked={bookmarked}
                        />
                        <ProductSection resId={id} arr={arr} />

                    </div>
                </> :
                <>
                    {
                        calling == "dining-out" ?
                            <>
                                <Header search={handleSearch} emptySearch={setInputval} status={status} />
                                {
                                    inputval != "" ?
                                        <>
                                            <div className="search-box">
                                                <div onClick={() => setBookmarked(false)}>
                                                    <SerachRestaurant inputvalue={inputval} status={status || 0} calling="dining-out" restaurant={filteredRestaurant} />
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }

                                <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                                <div className="all-about-restaurant">
                                    <AboutProductListing
                                        resId={id}
                                        image={image} shopName={shopName}
                                        aboutShop={aboutShop} rating={rating}
                                        address={address}
                                    />
                                    <ProductListingButton
                                        status={status}
                                        handleRemoveBookmark={handleRemoveBookmark} handleAddBookmark={handleAddBookmark} setBookmarked={setBookmarked} bookmarked={bookmarked}
                                    />
                                    <ProductSection resId={id} arr={arr} />
                                </div>
                            </> :
                            <>
                                <Header search={handleSearch} emptySearch={setInputval} status={status} />
                                {
                                    inputval != "" ?
                                        <>
                                            <div className="search-box">
                                                <div onClick={() => setBookmarked(false)}>
                                                    <SerachRestaurant inputvalue={inputval} status={status || 0} calling="nightlife" restaurant={filteredRestaurant} />
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }

                                <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                                <div className="all-about-restaurant">
                                    <AboutProductListing
                                        resId={id}
                                        image={image} shopName={shopName}
                                        aboutShop={aboutShop} address={address} rating={rating}
                                    />
                                    <ProductListingButton
                                        status={status}
                                        handleRemoveBookmark={handleRemoveBookmark} handleAddBookmark={handleAddBookmark} setBookmarked={setBookmarked} bookmarked={bookmarked}
                                    />
                                    <ProductSection resId={id} arr={arr} />
                                </div>
                            </>
                    }
                </>
            }
            {
                order.data.length > 0 && <OrderStatus />
            }
        </>
    )
}
export default ProductListing