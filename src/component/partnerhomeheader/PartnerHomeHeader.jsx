import React from 'react'
import img1 from "../../assets/zomato/zomatoPartnerBusiness.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePartnerDetail } from '../../store/partnerSlice.js';
import { removeResDetail } from '../../store/restaurantSlice.js';
import { removeCuisines } from '../../store/cuisinesSlice.js';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removePartnerOrder } from '../../store/partnerOrderSlice.js';

function PartnerHomeHeader({ orderSection, setOrderSection, prevOrderSection, setPrevOrdeSectionr }) {

    const partnerOrder = useSelector((s) => s.partnerOrder.data)
    const PartnerName = useSelector((s) => s.partner.fullName)
    const PartnerEmail = useSelector((s) => s.partner.email)
    const PartnerPP = useSelector((s) => s.partner.ppURL)
    const partnerRestaurant = useSelector((s) => s.restaurant)
    console.log("partnetname", PartnerName, partnerRestaurant.data);

    const [arrow, setArraow] = useState(true)

    const showOption = (e) => {
        setArraow(false)
    }

    const closeOption = (e) => {
        setArraow(true)
    }

    const changeSection = (event) => {
        console.log(event);
        setOrderSection(event.target.className)
        document.getElementsByClassName(prevOrderSection)[0].style.border = "none"
        setPrevOrdeSectionr(event.target.className)
        event.target.style.borderBottom = "2px solid rgb(94, 132, 246)"
    }

    const logoutPartner = () => {
        dispatch(removePartnerDetail())
        dispatch(removeResDetail())
        dispatch(removeCuisines())
        dispatch(removePartnerOrder())
        navigate("/partner/login")
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [receivedOrder, setReceivedOrder] = useState(0)
    const [completedOrder, setCompletedOrder] = useState(0)

    useEffect(() => {
        document.getElementsByClassName("received-order")[0].style.borderBottom = "2px solid rgb(94, 132, 246)"
        let receivedorder = 0
        let completedorder = 0
        partnerOrder.map((e) => {
            if (e.orderedDone == false) {
                receivedOrder++
            }
            else {
                completedorder++
            }
        })
        setReceivedOrder(receivedorder)
        setCompletedOrder(completedorder)
    }, [])

    window.addEventListener("click", () => {
        if (arrow == false) {
            setArraow(true)
        }
    })

    return (
        <div className='header-parent'>
            <div className="header">
                <Link to="/partner/home">
                    <img src={img1} alt="" />
                </Link>
                <div className='profile'>
                    <img src={PartnerPP} alt="" />
                    <div>{PartnerName}</div>
                    {
                        arrow ? <IoMdArrowDropdown onClick={(e) => {
                            showOption(e)
                            e.stopPropagation()
                        }
                        } /> : <IoMdArrowDropup onClick={(e) => {
                            closeOption(e)
                            e.stopPropagation()
                        }} />
                    }
                </div>
                {
                    !arrow && <div onClick={(e) => e.stopPropagation()} className='profile-option'>
                        <img src={PartnerPP} alt="" />
                        <div className='t1'>{PartnerName}</div>
                        <div className='t2'>{PartnerEmail}</div>
                        <div className='t3'>
                            <button onClick={() => { navigate("/partner/profile") }} >Profile</button>
                            <button onClick={() => { navigate("/partner/home/restaurant") }} >Restaurant</button>
                            <button onClick={() => { navigate("/partner/register/create-your-restaurant") }}>Add Restaurant</button>
                        </div>
                        <button onClick={logoutPartner} className='t4'>Logout</button>
                        <div className='condition'>
                            <div>Terms of service</div>
                            <div>|</div>
                            <div>Privacy policy</div>
                            <div>|</div>
                            <div>Code of conduct</div>
                        </div>
                    </div>
                }
            </div>
            {
                orderSection ?
                    <div className='order-status'>
                        <div onClick={changeSection} className='received-order'>Received order({receivedOrder})</div>
                        {/* <div onClick={changeSection} className='accepted-order'>Accepted order()</div> */}
                        <div onClick={changeSection} className='order-completed'>Order completed({completedOrder})</div>
                    </div> :
                    <div className='order-status'>
                        <div className='received-order'>{`My restaurant (${partnerRestaurant.data.length})`}</div>
                    </div>
            }
            <hr />
        </div>
    )
}

export default PartnerHomeHeader