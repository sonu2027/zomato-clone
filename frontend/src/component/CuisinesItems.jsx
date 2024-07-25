import React, { useEffect, useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../store/orderSlice';
import { useNavigate } from 'react-router-dom';

function CuisinesItems({ Name, price, resId, cart = false }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPopoupForOrderDone, setShowPopoupForOrderDone] = useState(false)

    const [itemCount, setItemCount] = useState(0)
    const order = useSelector((s) => s.order)
    const customer = useSelector((s) => s.customer.data)

    useEffect(() => {
        order.data.map((e) => {
            if (e.name == Name) {
                setItemCount(e.quantity)
            }
        })
    }, [itemCount])

    const handleAddItems = () => {
        if (order.orderedDone) {
            setShowPopoupForOrderDone(true)
        }
        else {
            dispatch(setQuantity({ name: Name, price, quantity: itemCount + 1, resId }))
            setItemCount(itemCount + 1)
        }
    }

    const handleSubtractItems = () => {
        dispatch(setQuantity({ name: Name, price, quantity: itemCount - 1, resId }))
        setItemCount(itemCount - 1)
        if (order.data.length === 1 && order.data[0].quantity === 1) {
            navigate(-1)
        }
    }

    window.addEventListener("click", () => {
        if (showPopoupForOrderDone) {
            setShowPopoupForOrderDone(false)
        }
    })

    return (
        <>
            {
                !cart ?
                    <>
                        <div className="div23" >
                            <div>{Name}</div>
                            <div>{price}</div>
                        </div>
                        <div className="div24">
                            <button className="button">
                                {
                                    !order.orderedDone && itemCount > 0 && <RiSubtractFill className='icon' onClick={handleSubtractItems} />
                                }
                                {
                                    itemCount > 0 ? <span style={{ padding: "0 16px" }}>{itemCount}</span> : <div className='addIcon' onClick={(e) => {
                                        e.stopPropagation()
                                        if (!customer)
                                            navigate("/login")
                                        else
                                            handleAddItems()
                                    }
                                    } >ADD</div>
                                }
                                {
                                    !order.orderedDone && <IoIosAdd className='icon' onClick={() => {
                                        if (!customer)
                                            navigate("/login")
                                        else
                                            handleAddItems()
                                    }
                                    } />
                                }
                            </button>
                            {
                                showPopoupForOrderDone && <div style={{ position: "fixed", height: "100vh", width: "100vw", top: '0', left: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div onClick={(e) => {
                                        e.stopPropagation()
                                    }} style={{ background: "white", padding: "1rem 2rem", borderRadius: "6px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "1rem" }}>
                                        <div>
                                            <pre>You can't make a new order,</pre>
                                            <pre>you alreday have 1 pending order</pre>
                                        </div>
                                        <button style={{ padding: "0.5rem 1.5rem" }} onClick={(e) =>
                                            setShowPopoupForOrderDone(false)
                                        }>ok</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </> :
                    <>
                        {
                            itemCount > 0 &&
                            <>
                                <div className="div23" >
                                    <div>{Name}</div>
                                    <div>{price}</div>
                                </div>
                                <div className="div24">
                                    <button className="button">
                                        {
                                            !order.orderedDone && itemCount > 0 && <RiSubtractFill className='icon' onClick={handleSubtractItems} />
                                        }
                                        {
                                            itemCount > 0 ? <span style={{ padding: "0 16px" }}>{itemCount}</span> : <div className='addIcon' onClick={(e) => {
                                                handleAddItems()
                                                e.stopPropagation()
                                            }
                                            } >ADD</div>
                                        }
                                        {
                                            !order.orderedDone && <IoIosAdd className='icon' onClick={handleAddItems} />
                                        }
                                    </button>
                                    {
                                        showPopoupForOrderDone && <div style={{ position: "fixed", height: "100vh", width: "100vw", top: '0', left: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <div onClick={(e) => {
                                                e.stopPropagation()
                                            }} style={{ background: "white", padding: "1rem 2rem", borderRadius: "6px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "1rem" }}>
                                                <div>
                                                    <pre>You can't make a new order,</pre>
                                                    <pre>you alreday have 1 pending order</pre>
                                                </div>
                                                <button style={{ padding: "0.5rem 1.5rem" }} onClick={(e) =>
                                                    setShowPopoupForOrderDone(false)
                                                }>ok</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </>

                        }
                    </>
            }
        </>
    )
}

export default CuisinesItems