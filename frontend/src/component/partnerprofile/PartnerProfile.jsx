import "./PartnerProfile.css"
import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { deleteAccount } from '../../databaseCall/deleteAccount.js';
import { uploadPartnerProfilePicture } from "../../databaseCall/uploadPartnerProfilePicture.js";
import { useDispatch } from "react-redux";
import { setPartnerDetail } from "../../store/partnerSlice.js";


function PartnerProfile() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const data = useSelector((s) => s.partner)
    console.log("data: ", data);
    const [showDeleteOption, setShowDeleteOption] = useState(false)
    const [showPPuploadOption, setShowPPuploadOption] = useState(false)
    const [accountDeleted, setAccountDeleted] = useState(false)
    const [ppUploaded, setPPUploaded] = useState(false)

    const handleDeleteOption = (e) => {
        e.stopPropagation()
        setShowDeleteOption(true)
    }

    window.addEventListener("click", () => {
        if (showDeleteOption) {
            setShowDeleteOption(false)
        }
        if (showPPuploadOption) {
            setShowPPuploadOption(false)
        }
    })

    const handleAccountDelete = async () => {
        deleteAccount(data.id)
            .then((res) => {
                setAccountDeleted(true)
                setTimeout(() => {
                    setAccountDeleted(false)
                    navigate("/partner/login")
                }, 4000)
            })
            .catch((error) => {
                console.log("error whule deleting account: ", error);
            })
    }

    const handlePPOption = async (e) => {
        e.stopPropagation()
        setShowPPuploadOption(true)
    }

    const handlePPUpload = async (e) => {
        uploadPartnerProfilePicture(e, data.id)
            .then((data) => {
                dispatch(setPartnerDetail({
                    fullName: data.owner_full_name,
                    email: data.owner_email,
                    ppURL: data.owner_profile_picture_URL
                    ,
                    ppPub_id: data.owner_profile_picture_public_id,
                    id: data._id,
                    restaurantId: data.restaurantId ? data.restaurantId : [],
                }))
                setPPUploaded(true)
                setTimeout(() => {
                    setPPUploaded(false)
                    navigate("/partner/home")
                }, 4000)
            })
            .catch((error) => {
                console.log("Error while updating profile picture: ", error);
            })
    }

    return (
        <div className="PartnerProfile">
            <div className='PartnerProfile-child1'>
                {
                    data.ppURL.length > 0 ? <img className='image' src={data.ppURL} alt="" /> :
                        <FaRegUserCircle className='image' />
                }
                <div className='details'>
                    <div className='t1'>{data.fullName}</div>
                    <div className='t2'>{data.email}</div>
                </div>
                <div className='section'>
                    {/* <Profile userProfilePhoto={userProfilePhoto} fullName={fullName} username={username} /> */}
                    <ul className='ulList'>

                        <Link className="linkTag" to="/partner/setting/name">
                            <li className='listItem'>
                                <button>Name</button>
                                <IoIosArrowForward />
                            </li>
                        </Link>

                        <Link className="linkTag" to="/partner/setting/email">
                            <li className='listItem'>
                                <button>Email</button>
                                <IoIosArrowForward />
                            </li>
                        </Link>


                        <li onClick={handlePPOption} className='listItem linkTag'>
                            <button>Profile Picture</button>
                            <IoIosArrowForward />
                        </li>


                        <li onClick={handleDeleteOption} className='listItem linkTag'>
                            <button>Delete your account</button>
                            <IoIosArrowForward />
                        </li>

                    </ul>
                </div>

            </div>

            {
                showPPuploadOption && <div className="PartnerProfile-child2">
                    <div onClick={(e) => e.stopPropagation()} className="account-deleteion">
                        <p>Upload your profile picture</p>
                        <label style={{ border: "1px solid black", padding: "2px 4px" }} htmlFor="profilePicture">Choose file</label>
                        {ppUploaded && <p>Profile picture uploaded successfully</p>}
                        <form onSubmit={handlePPUpload} encType="multipart/form-data" className="button">
                            <input style={{ display: "none" }} type="file" name="profilePicture" id="profilePicture" />
                            <button onClick={(e) => {
                                e.stopPropagation()
                                setShowPPuploadOption(false)
                            }}>Cancel</button>
                            <button type="submit">Upload</button>
                        </form>
                    </div>
                </div>
            }

            {
                showDeleteOption && <div className="PartnerProfile-child2">
                    <div onClick={(e) => e.stopPropagation()} className="account-deleteion">
                        <p>Are you sure you want to delete your account?</p>
                        {accountDeleted && <p>Account successfully deleted</p>}
                        <div className="button">
                            <button onClick={(e) => {
                                e.stopPropagation()
                                setShowDeleteOption(false)
                            }}>Cancel</button>
                            <button onClick={handleAccountDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PartnerProfile