import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./partnerhome.css"
import img1 from "../../assets/zomato/zomatoPartnerBusiness.png";
import ReceivedOrder from '../../component/receivedorder/ReceivedOrder';
import AcceptedOrder from '../../component/acceptedorder/AcceptedOrder';
import OrderCompleted from '../../component/ordercompleted/OrderCompleted';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { removePartnerDetail } from '../../store/partnerSlice.js';
import { Navigate, useNavigate } from 'react-router-dom';

function PartnerHome() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const PartnerName = useSelector((s) => s.partner.fullName)
  const PartnerEmail= useSelector((s) => s.partner.email)
  console.log("partnetname", PartnerName);

  const data1 = useSelector((s) => s.partner)
  console.log("data1: ", data1);
  const data2 = useSelector((s) => s.restaurant)
  console.log("data2: ", data2);

  const [arrow, setArraow] = useState(true)
  const [orderSection, setOrderSection] = useState("received-order")
  const [prevOrderSection, setPrevOrdeSectionr] = useState("received-order")

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

  useEffect(() => {
    document.getElementsByClassName("received-order")[0].style.borderBottom = "2px solid rgb(94, 132, 246)"
  }, [])

  const logoutPartner=()=>{
    dispatch(removePartnerDetail())
    navigate("/partner/login")
  }

  return (
    <div className='PartnerHome'>
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
          !arrow && <div className='profile-option'>
            <img src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp" alt="" />
            <div className='t1'>{PartnerName}</div>
            <div className='t2'>{PartnerEmail}</div>
            <div className='t3'>My restaurant</div>
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
      <div className='order-status'>
        <div onClick={changeSection} className='received-order'>Received order(0)</div>
        <div onClick={changeSection} className='accepted-order'>Accepted order(0)</div>
        <div onClick={changeSection} className='order-completed'>Order completed(0)</div>
      </div>
      <hr />
      {
        orderSection == "received-order" && <ReceivedOrder />
      }
      {
        orderSection == "accepted-order" && <AcceptedOrder />
      }
      {
        orderSection == "order-completed" && <OrderCompleted />
      }
    </div>
  )
}

export default PartnerHome