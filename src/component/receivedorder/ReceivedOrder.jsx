import React, { useEffect, useState } from 'react'
import "./ReceivedOrder.css"
import { useSelector } from 'react-redux'

function ReceivedOrder() {

    const partnerOrder = useSelector((s) => s.partnerOrder.data)
    console.log("PartnerOrder is: ", partnerOrder);

    const [filteredOrder, setFilteredOrder] = useState([])

    useEffect(() => {
        let array = []
        partnerOrder.map((e) => {
            if (e.completed == false) {
                array.push(e)
            }
        })
        setFilteredOrder(array)
    }, [partnerOrder])


    console.log("filtered order is:", filteredOrder);

    return (
        <div className='ReceivedOrder'>
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
                            <div>Item {ind}</div>
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

export default ReceivedOrder