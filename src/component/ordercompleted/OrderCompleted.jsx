import React, { useEffect, useState } from 'react'
import "./OrderCompleted.css"
import { useSelector } from 'react-redux'

function OrderCompleted() {

    const partnerOrder = useSelector((s) => s.partnerOrder.data)
    console.log("PartnerOrder is: ", partnerOrder);

    const [filteredOrder, setFilteredOrder] = useState([])

    useEffect(() => {
        let array = []
        partnerOrder.map((e) => {
            if (e.completed == true) {
                array.push(e)
            }
        })
        setFilteredOrder(array)
    }, [])

    console.log("filtered order is:", filteredOrder);

    return (
        <div className='OrderCompleted'>
            {
                filteredOrder.length > 0 && filteredOrder.map((e) => <div className='order-details' key={e._id}>
                    <div>Restaurant Id : {e.restaurantId}</div>
                    <div>Order ID : {e._id}</div>
                    <div>Customer details</div>
                    <div>Name : {e.receiverName}</div>
                    <div>Address : {e.receiverAddress}</div>
                    <div>Phone no : {e.receiverPhoneNo}</div>
                    <div>Items</div>
                    {
                        e.items.map((elem, ind) => <div key={elem.name + elem.price + elem.quantity}>
                            <div>Item {ind+1}</div>
                            <div>Name : {elem.name}</div>
                            <div>Price : {elem.price}</div>
                            <div>Quantity : {elem.quantity}</div>
                        </div>)
                    }
                    <div>Total price : {e.price}</div>
                </div>)
            }
        </div>
    )
}

export default OrderCompleted