import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom"
import "./OrderStatus.css"

function OrderStatus() {
    const order = useSelector((s) => s.order)
    const allRestaurant = useSelector((s) => s.allRestaurant.data)
    const [itemCount, setItemCount] = useState(0)
    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        let item = 0
        order.data.map((e) => {
            item += e.quantity
        })
        setItemCount(item)

        allRestaurant.map((e) => {
            if (e._id == order.restaurantId) {
                setRestaurantData([e.restaurant_name, e.restaurant_image_URL])
            }
        })

    }, [order])

    return (
        <>
            {
                order.restaurantId && order.restaurantId.length > 0 &&
                <div className="app-parent">
                    <div className="app">
                        <img className="resImg" src={restaurantData[1]} alt="" />
                        <div>
                            <span> {restaurantData[0]}</span>
                            <div>
                                <span>{itemCount} items</span>
                                <span> | </span>
                                <span>View Menu</span>
                                <IoMdArrowDropright className="arrow" />
                            </div>
                        </div>
                        <div>
                            <Link to="/cart">
                                <button className="view-cart">View cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default OrderStatus