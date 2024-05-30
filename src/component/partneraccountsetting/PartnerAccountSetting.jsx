import React, { useEffect } from 'react'
import "./PartnerAccountSetting.css"
import { useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePartnerName } from '../../databaseCall/updatePartnerName.js';
import { setPartnerDetail } from '../../store/partnerSlice.js';
import { useDispatch } from 'react-redux';
import { sendEmailOtp } from '../../databaseCall/sendEmailOtp.js';
import { updatePartnerEmail } from '../../databaseCall/updatePartnerEmail.js';

function PartnerAccountSetting() {

    const data = useSelector((s) => s.partner)
    const [inputData, setInputData] = useState("")
    const { change } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [nameUpdated, setNameUpdated] = useState(false)
    const [otpGenerated, setOtpGenerated] = useState(false)
    const [otpSent, setOtpSent] = useState("")
    const [inputOtp, setInputOtp] = useState("")
    const [emailUpdated, setEmailUpdated] = useState(false)

    useEffect(() => {
        setInputData(change == "name" ? data.fullName : data.email)
    }, [])

    const handlePartnerName = (e) => {
        e.stopPropagation();
        console.log("clicked on update name");
        updatePartnerName(data.id, inputData)
            .then((partnerDetails) => {
                console.log("partnerDetails is: ", partnerDetails);
                dispatch(setPartnerDetail({
                    fullName: partnerDetails.partner.owner_full_name,
                    email: partnerDetails.partner.owner_email,
                    ppURL: partnerDetails.partner.owner_profile_picture_URL ? partnerDetails.partner.owner_profile_picture_URL : ""
                    ,
                    ppPub_id: partnerDetails.partner.owner_profile_picture_public_id ? partnerDetails.partner.owner_profile_picture_public_id : "",
                    id: partnerDetails.partner._id,
                    restaurantId: partnerDetails.partner.restaurantId ? partnerDetails.partner.restaurantId : [],
                }))
                setNameUpdated(true)
                setTimeout(() => {
                    setNameUpdated(false)
                    navigate("/partner/home")
                }, 4000)
            })
    }

    const handlePartnerEmail = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("clicked on update email", e);
        if (inputData.includes("@gmail.com")) {
            sendEmailOtp(inputData)
                .then((otp) => {
                    setOtpGenerated(true)
                    setOtpSent(otp)
                })
                .catch((error) => {
                    console.log("Error while sending email otp: ", error);
                })

        }
    }

    useEffect(() => {
        console.log(otpSent, typeof otpSent, inputOtp);
        if (otpSent === Number(inputOtp)) {
            updatePartnerEmail(data.id, inputData)
                .then((partnerDetails) => {
                    console.log("partnerDetails is: ", partnerDetails);
                    dispatch(setPartnerDetail({
                        fullName: partnerDetails.partner.owner_full_name,
                        email: partnerDetails.partner.owner_email,
                        ppURL: partnerDetails.partner.owner_profile_picture_URL ? partnerDetails.partner.owner_profile_picture_URL : ""
                        ,
                        ppPub_id: partnerDetails.partner.owner_profile_picture_public_id ? partnerDetails.partner.owner_profile_picture_public_id : "",
                        id: partnerDetails.partner._id,
                        restaurantId: partnerDetails.partner.restaurantId ? partnerDetails.partner.restaurantId : [],
                    }))
                    setEmailUpdated(true)
                    setTimeout(() => {
                        setEmailUpdated(false)
                        navigate("/partner/home")
                    }, 4000)
                })
        }
    }, [inputOtp])


    console.log("data: ", data);
    console.log('change: ', change);

    return (
        <div className='PartnerProfile'>
            <div className='PartnerProfile-child1'>
                {
                    data.ppURL.length > 0 ? <img className='image' src={data.ppURL} alt="" /> :
                        <FaRegUserCircle className='image' />
                }
                <div className='details'>
                    <div className='t1'>{data.fullName}</div>
                    <div className='t2'>{data.email}</div>
                </div>

                {change == "name" && <div>
                    <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" placeholder={`Enter your new  ${change}`} />
                </div>}

                {
                    change == "email" && !otpGenerated && <div>
                        <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="email" name='email' placeholder="Enter your new email" />
                        <button onClick={handlePartnerEmail}>Update</button>
                    </div>
                }
                {
                    otpGenerated && <div>
                        <div style={{ marginTop: "0.5rem" }}>{`Enter the otp send to ${data.email}`}</div>
                        <input onChange={(e) => setInputOtp(e.target.value)} type="text" placeholder="Enter OTP" />
                    </div>
                }

                {nameUpdated && <div style={{ marginTop: "4px" }}>Name updated successfully</div>}
                {emailUpdated && <div style={{ marginTop: "4px" }}>Email updated successfully</div>}

                {
                    change == "name" && <div>
                        <button onClick={change == "name" ? handlePartnerName : handlePartnerEmail}>Update</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PartnerAccountSetting