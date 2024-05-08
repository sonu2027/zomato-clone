import React from 'react'
import "./PartnerRegister.css"
import img1 from "../../assets/zomato/zomatoPartnerBusiness.png";
import { useNavigate } from 'react-router-dom';

function PartnerRegister() {

    const navigate=useNavigate()

    return (
        <div className='PartnerRegister'>
            <div className='t1'>
                <img src={img1} alt="" />
                <button>Login</button>
            </div>
            <div className='body'>
                <div className='body-child'>
                    <div className='t2'>
                        <div>Partner with Zomato</div>
                        <div className='div2'>at 0% commission for the 1st month!</div>
                    </div>
                    <div className='t3'>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</div>
                    <div className='t4'>
                        <button className='b1'>Register your restaurant</button>
                        <button onClick={()=>navigate("/partner/login")} className='b2'>Login to view your existing restaurant</button>
                    </div>
                    <div className='t5'>Need help? Contact +91 97-38-38-38-38</div>
                </div>
            </div>
        </div>
    )
}

export default PartnerRegister