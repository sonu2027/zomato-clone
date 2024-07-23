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
                    <div><b style={{color:"rgb(239, 79, 95)"}}>Restaurant Id : </b>{e.restaurantId}</div>
                    <div><b style={{color:"rgb(239, 79, 95)"}}>Order ID : </b>{e._id}</div>
                    <div style={{marginTop:"8px", color:"rgb(239, 79, 95)", textDecoration:"underline"}}><b>Customer details</b></div>
                    <div>Name : {e.receiverName}</div>
                    <div>Address : {e.receiverAddress}</div>
                    <div>Phone no : {e.receiverPhoneNo}</div>
                    <div style={{marginTop:"8px", color:"rgb(239, 79, 95)", textDecoration:"underline"}}><b>Items</b></div>
                    {
                        e.items.map((elem, ind) => <div style={{margin:"8px 0"}} key={elem.name + elem.price + elem.quantity}>
                            <div><b>Item {ind+1}</b></div>
                            <div>Name : {elem.name}</div>
                            <div>Price : {elem.price}</div>
                            <div>Quantity : {elem.quantity}</div>
                        </div>)
                    }
                    <div>Total price : {e.price} RS</div>
                </div>)
            }
        </div>
    )
}

export default OrderCompleted