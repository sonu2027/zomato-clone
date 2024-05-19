import React from 'react'
import img1 from "../../assets/zomato/zomatoPartnerBusiness.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePartnerDetail } from '../../store/partnerSlice.js';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';

function PartnerHomeHeader({ orderSection, setOrderSection, prevOrderSection, setPrevOrdeSectionr }) {

    const PartnerName = useSelector((s) => s.partner.fullName)
    const PartnerEmail = useSelector((s) => s.partner.email)
    console.log("partnetname", PartnerName);

    const [arrow, setArraow] = useState(true)

    const showOption = (e) => {
        setArraow(!arrow)
    }

    const closeOption = (e) => {
        setArraow(!arrow)
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
        navigate("/partner/login")
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        document.getElementsByClassName("received-order")[0].style.borderBottom = "2px solid rgb(94, 132, 246)"
    }, [])

    return (
        <div onClick={(e) => closeOption(e)}>
            <div className="header">
                <img src={img1} alt="" />
                <div className='profile'>
                    <img src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp" alt="" />
                    {PartnerName}
                    {
                        arrow ? <IoMdArrowDropdown onClick={(e) => showOption(e)} /> : <IoMdArrowDropup onClick={(e) => closeOption(e)} />
                    }
                </div>
                {
                    !arrow && <div onClick={(e)=>e.stopPropagation()} className='profile-option'>
                        <img src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp" alt="" />
                        <div className='t1'>{PartnerName}</div>
                        <div className='t2'>{PartnerEmail}</div>
                        {/* <div onClick={() => { navigate("/partner/home/restaurant") }} className='t3'>My restaurant</div> */}
                        <div className='t3'>
                            <button onClick={() => { navigate("/partner/home/restaurant") }} >My restaurant</button>
                            <button onClick={() => { navigate("/partner/register/create-your-restaurant") }}>Add Rstaurant</button>
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
                        <div onClick={changeSection} className='received-order'>Received order(0)</div>
                        <div onClick={changeSection} className='accepted-order'>Accepted order(0)</div>
                        <div onClick={changeSection} className='order-completed'>Order completed(0)</div>
                    </div> :
                    <div className='order-status'>
                        <div className='received-order'>My restaurant(0)</div>
                    </div>
            }
            <hr />
        </div>
    )
}

export default PartnerHomeHeader