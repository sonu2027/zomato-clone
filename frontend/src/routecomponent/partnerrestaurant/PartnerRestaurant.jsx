import React, { useState } from 'react'
import PartnerHomeHeader from '../../component/partnerhomeheader/PartnerHomeHeader.jsx'
import "../partnerhome/partnerhome.css"
import { useSelector } from 'react-redux'
import "./partnerRestaurant.css"
import { useNavigate } from 'react-router-dom'
import { BsThreeDotsVertical } from "react-icons/bs";
import { setPartnerDetail } from '../../store/partnerSlice.js'
import { useDispatch } from 'react-redux'
import { setResDetail } from '../../store/restaurantSlice.js'
import { deleteRestaurant } from '../../databaseCall/restaurant.delete.js'
import { deletePartnerRestaurant } from '../../databaseCall/partner.delete.restaurant.js'
import { partnerRestaurant } from '../../databaseCall/get.partner.restaurant.js'
import AddCuisine from '../../component/addeditcuisine/AddCuisine.jsx'

function PartnerRestaurant() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const restaurantDetails = useSelector((s) => s.restaurant)
    console.log("resdet in partnerRestaurant: ", restaurantDetails.data);

    const [showResOption, setShowResOption] = useState(false)
    const [currentElement, setCurrentElement] = useState("")
    const [showDeleteRestaurantOption, setShowDeleteRestaurantOption] = useState(false)
    const [resDelSucc, setResDelSucc] = useState(false)
    const [resDelFail, setResDelFail] = useState(false)
    const [openCuisineTab, setOpenCuisineTab] = useState(false)

    const handleOption = (event, element) => {
        setShowResOption(!showResOption)
        setCurrentElement(element)
        event.stopPropagation()
    }

    window.addEventListener("click", () => {
        console.log("clicked on window");
        if (showResOption) {
            setShowResOption(false)
            setCurrentElement("")
        }
        if (showDeleteRestaurantOption) {
            setShowDeleteRestaurantOption(false)
            setCurrentElement("")
        }
    })

    const handleUndoDelete = (event) => {
        event.stopPropagation()
        setShowDeleteRestaurantOption(false)
        setCurrentElement("")
    }

    const handleDeleteRestaurant = async () => {
        deleteRestaurant(currentElement._id)
            .then((id) => {
                deletePartnerRestaurant(id)
                    .then(async (data) => {
                        let newIds = data.res1[0].restaurantId.filter((e) => e != id);
                        console.log("newids is: ", newIds);
                        dispatch(
                            setPartnerDetail({
                                fullName: data.res1[0].owner_full_name,
                                email: data.res1[0].owner_email,
                                ppURL: "",
                                ppPub_id: "",
                                id: data.res1[0]._id,
                                restaurantId: newIds,
                            })
                        );
                        console.log("restaurant deleted successfully: ", data);
                        partnerRestaurant(newIds)
                            .then((data) => {
                                dispatch(setResDetail(data));
                                setResDelSucc(true);
                                setTimeout(() => {
                                    setResDelSucc(false);
                                    setShowDeleteRestaurantOption(false);
                                    setCurrentElement("");
                                    navigate("/partner/home");
                                }, 3000);
                            })
                    })
            })
            .catch((error) => {
                console.log("Error while deleting restauarnt", error);
                setResDelFail(true)
                setTimeout(() => {
                    setResDelFail(false)
                    setShowDeleteRestaurantOption(false)
                    setCurrentElement("")
                }, 3000)
            })
    }

    const hand = (e) => {
        foundRestaurantOfCuisines = e
    }

    const [restauarntId, setRestauarntId] = useState(false)

    const handleCuine = (restaurantIds) => {
        setRestauarntId(restaurantIds)
        setOpenCuisineTab(true)
        setShowResOption(false)
    }

    const [showPopoupForCuisinesUpdated, setShowPopoupForCuisinesUpdated] = useState([false, false])

    window.addEventListener("click", () => {
        if (showPopoupForCuisinesUpdated) {
            setShowPopoupForCuisinesUpdated([false, false])
        }
    })

    return (
        <div className='partnerRestaurant'>
            <div className='PartnerHome'>
                <PartnerHomeHeader />
            </div>

            <div className="restaurant-section">
                {
                    restaurantDetails.data.map((e) => <div key={e._id} className='restaurantData'>
                        <div className='t1 t2'>{e.restaurant_name
                        } | RES ID {e._id}</div>
                        <div className='t1 t3'>{e.restaurant_complete_address}</div>
                        <div className='image t1'>
                            <img src={e.restaurant_image_URL} alt="" />
                        </div>
                        <BsThreeDotsVertical className='dot' onClick={(event) => handleOption(event, e)} />
                        {
                            (showResOption && currentElement === e) &&
                            <div onClick={(e) => e.stopPropagation()} className='restaurantOption'>
                                <button onClick={() => navigate("/partner/register/edit-your-restaurant", { state: { data: e } })}>Edit</button>
                                <button onClick={(e) => {
                                    setShowDeleteRestaurantOption(true)
                                    setShowResOption(false)
                                }}>Delete</button>
                                <button onClick={() => handleCuine(e._id)}>Add/Edit cuisines</button>
                            </div>

                        }
                        {
                            (showDeleteRestaurantOption && currentElement === e) &&
                            <div className='showDeleteRestaurantOption'>
                                <div onClick={(e) => e.stopPropagation()} className='box'>
                                    <div>Are you sure you want to delete your restaurant?</div>
                                    <div>Customer will not able to order and view from your restaurant.</div>
                                    <div>It will delete premenantly</div>
                                    {
                                        resDelSucc && <div><b>Restaurant deleted successfully</b></div>
                                    }
                                    {
                                        resDelFail && <div><b>Something went wrong, please try again</b></div>
                                    }
                                    <div className='button'>
                                        <button onClick={handleUndoDelete} >Cancel</button>
                                        <button onClick={handleDeleteRestaurant}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>)
                }
            </div>
            {
                openCuisineTab && <AddCuisine restaurantId={restauarntId} setOpenCuisineTab={setOpenCuisineTab} openCuisineTab={openCuisineTab} setShowPopoupForCuisinesUpdated={setShowPopoupForCuisinesUpdated} />
            }
            {
                showPopoupForCuisinesUpdated[0] && <div style={{ position: "fixed", height: "100vh", width: "100vw", top: '0', left: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} style={{ background: "white", padding: "1rem 2rem", borderRadius: "6px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "1rem" }}>
                        <div>
                            <pre>{showPopoupForCuisinesUpdated[1]}</pre>
                        </div>
                        <button style={{ padding: "0.5rem 1.5rem" }} onClick={(e) =>
                            setShowPopoupForCuisinesUpdated([false, false])
                        }>ok</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default PartnerRestaurant