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
import { removeOrderDetail, setCustomerDetails, setOrderFound, setOrderFoundDetail } from "../../store/orderSlice.js";
import { markOrderCompleted } from "../../databaseCall/markOrderCompleted.js";
import { useNavigate } from "react-router-dom";

function Cart() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const order = useSelector((s) => s.order)

    const allCuisines = useSelector((s) => s.allCuisines.data)
    const customer = useSelector((s) => s.customer.data)
    console.log("allcuisines: ", allCuisines);
    const [items, setItems] = useState([])

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
        console.log("arrays are;", arr);
        setItems(arr)
    }, [order])

    const handleCreateOrder = () => {
        console.log("Order items are: ", order.data);
        createOrder(order)
            .then((data) => {
                dispatch(setOrderFound())
                dispatch(setOrderFoundDetail(data))
            })
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
                            <CuisinesItems resId={order.restaurantId} Name={e.name} price={e.price} />
                        </div>)
                    }
                </div>
            </div>
            <div className="child3">
                <div className="child31">
                    <div className="details">
                        <CiHome />
                        <input readOnly={order.receiverAddress.length > 0} onChange={(e) => dispatch(setCustomerDetails({ address: e.target.value }))} value={order.receiverAddress} type="text" placeholder="Receiver full address" />
                    </div>
                    <div className="details">
                        <CiUser />
                        <input readOnly={order.receiverName.length > 0} onChange={(e) => dispatch(setCustomerDetails({ name: e.target.value }))} value={order.receiverName} type="text" placeholder="Receiver name" />
                    </div>
                    <div className="details">
                        <FiPhoneCall />
                        <input readOnly={order.receiverPhoneNo.length > 0} onChange={(e) => dispatch(setCustomerDetails({ phoneNo: e.target.value }))} value={order.receiverPhoneNo} type="number" placeholder="Receiver phone number" />
                    </div>
                </div>
            </div>
            <div className="child2">
                <div>{order.price}</div>
                <div className="button">
                    {
                        order.orderedDone ? <div>
                            <div>Received order?</div>
                            <button onClick={handleOrderCompleted}>
                                <span>Yes</span>
                                <IoMdArrowDropright className="arrow" />
                            </button>
                        </div> :
                            <button onClick={handleCreateOrder}>
                                <span>Place Order</span>
                                <IoMdArrowDropright className="arrow" />
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart