import { useSelector } from "react-redux"
import "./Cart.css"
import { useEffect, useState } from "react";
import CuisinesItems from "../../component/CuisinesItems";
import { IoMdArrowDropright } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { createOrder } from "../../databaseCall/createOrder.js";
import { useDispatch } from "react-redux";
import { removeOrderDetail, setCustomerDetails, setCustomerId, setOrderFound, setOrderFoundDetail } from "../../store/orderSlice.js";
import { markOrderCompleted } from "../../databaseCall/markOrderCompleted.js";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useRef } from "react";

function Cart() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef(null)

    const order = useSelector((s) => s.order)

    const allCuisines = useSelector((s) => s.allCuisines.data)
    const customer = useSelector((s) => s.customer.data)
    const [items, setItems] = useState([])
    const [focusIndex, setFocusIndex] = useState(0)

    useEffect(() => {
        let obj = {}
        allCuisines.map((e) => {
            if (e.restaurantId == order.restaurantId) {
                obj = e
            }
        })
        let arr = []
        if (obj && obj.cuisines) {
            Object.entries(obj.cuisines).map((e) => {
                arr = [...arr, ...e[1]]
            })
        }
        setItems(arr)
    }, [order])

    const handleCreateOrder = () => {
        if (order.receiverAddress.length > 0 && order.receiverName.length > 0 && order.receiverPhoneNo.length > 0) {
            createOrder(order)
                .then((data) => {
                    dispatch(setOrderFound())
                    dispatch(setOrderFoundDetail(data))
                })
        }
        else if (order.receiverAddress.length == 0) {
            setFocusIndex(0)
        }
        else if (order.receiverName.length == 0) {
            setFocusIndex(1)
        }
        else {
            setFocusIndex(2)
        }
    }

    const allRestaurant = useSelector((s) => s.allRestaurant.data)
    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        allRestaurant.map((e) => {
            if (e._id == order.restaurantId) {
                setRestaurantData([e.restaurant_name, e.restaurant_image_URL])
            }
        })
    }, [])

    useEffect(() => {
        inputRef.current.focus()
    }, [focusIndex])

    const handleOrderCompleted = () => {
        markOrderCompleted(order.orderId)
            .then((data) => {
                dispatch(removeOrderDetail())
                navigate("/delivery")
            })
    }

    return (
        <div className="cart">
            <div className="cart-child1">
                <div className="div2">
                    {
                        items.length > 0 && items.map((e) => <div className="div22" key={e.name}>
                            <CuisinesItems cart={true} resId={order.restaurantId} Name={e.name} price={e.price} />
                        </div>)
                    }
                </div>
            </div>
            <div className="child3">
                <div className="child31">
                    <div className="details">
                        <CiHome />
                        <input onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setFocusIndex(1)
                            }
                        }} onFocus={() => setFocusIndex(0)} ref={focusIndex === 0 ? inputRef : null} readOnly={order.orderedDone} onChange={(e) => {
                            dispatch(setCustomerDetails({ address: e.target.value }))
                            console.log("e.tar.val", e.target.value);
                        }} value={order.receiverAddress} type="text" placeholder="Receiver full address" />
                    </div>
                    <div className="details">
                        <CiUser />
                        <input onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setFocusIndex(2)
                            }
                        }} onFocus={() => setFocusIndex(1)} ref={focusIndex === 1 ? inputRef : null} readOnly={order.orderedDone} onChange={(e) => dispatch(setCustomerDetails({ name: e.target.value }))} value={order.receiverName} type="text" placeholder="Receiver name" />
                    </div>
                    <div className="details">
                        <FiPhoneCall />
                        <input ref={focusIndex === 2 ? inputRef : null} readOnly={order.orderedDone} onChange={(e) => dispatch(setCustomerDetails({ phoneNo: e.target.value }))} value={order.receiverPhoneNo} type="number" placeholder="Receiver phone number" />
                    </div>
                </div>
            </div>
            <div className="child4">
                <div className="child4-child">
                    <MdOutlinePayment />
                    <div className="billAmount">
                        <div>
                            <span>Total Bill </span>
                            <span>
                                <FaRupeeSign className="rupeeinchild4" />
                                <b>{order.price}</b>
                            </span>
                        </div>
                        <div>Incl, taxes, charges & donation</div>
                    </div>
                </div>
            </div>

            <div className="child2">
                <div className="button">
                    {
                        order.orderedDone ? <div className="buttons">
                            <div>Received order?</div>
                            <div style={{ cursor: "pointer" }} onClick={handleOrderCompleted}>
                                <span>Yes</span>
                                <IoMdArrowDropright className="arrow" />
                            </div>
                        </div> :
                            <button className="buttons">
                                <div>
                                    <div className="price">
                                        <FaRupeeSign className="price-icon" />
                                        <span>{order.price}</span>
                                    </div>
                                    <div style={{ color: "rgb(240, 240, 240)" }}>Total</div>
                                </div>
                                <div onClick={handleCreateOrder}>
                                    <span>Place Order</span>
                                    <IoMdArrowDropright className="arrow" />
                                </div>
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart