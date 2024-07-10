import "./BookmarkPage.css"
import Footer from "../../component/footer/Footer"
import Header from "../../containercomponent/header/Header"
import SerachRestaurant from "../../component/searchrestaurant/SerachRestaurant"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import OrderStatus from "../../component/orderStatus/OrderStatus.jsx"

function BookmarkPage() {

    const [inputval, setInputval] = useState("")
    function handleSearch(e) {
        if (e != "") {
            setInputval(e.target.value)
        }
    }

    const customerDetails = useSelector((s) => s.customer.data)
    const order = useSelector((s) => s.order)
    const restaurant = useSelector((s) => s.allRestaurant)
    console.log("Restaurant fetched from store: ", restaurant);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    useEffect(() => {
        let newArr = []
        restaurant.data.map((e1, i1) => {
            customerDetails.bookmarkedRes.map((e2, i2) => {
                if (e2 == e1._id) {
                    newArr.push(e1)
                }
            })
        })
        setFilteredRestaurant(newArr)
    }, [])

    window.addEventListener("click", () => {
        setInputval("")
    })

    return (
        <div>
            <Header emptySearch={setInputval} search={handleSearch} status={1} />
            {
                inputval != "" ?
                    <>
                        <div className="search-box">
                            <SerachRestaurant inputvalue={inputval} status={status || 0} calling="delivery" restaurant={filteredRestaurant} />
                        </div>
                    </> :
                    <>
                    </>
            }
            <Restaurant status={status || 0} title={"Best Restaurant in Kolkata"} rating={[4, 3, 2, 3, 5]} calling="delivery" restaurant={filteredRestaurant} />

            <Footer />
            {
                order.data.length>0 && <OrderStatus />
            }
        </div>
    )
}

export default BookmarkPage