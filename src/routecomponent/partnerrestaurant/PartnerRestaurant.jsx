import React from 'react'
import PartnerHomeHeader from '../../component/partnerhomeheader/PartnerHomeHeader'
import "../partnerhome/partnerhome.css"
import { useSelector } from 'react-redux'
import "./partnerRestaurant.css"
import { useNavigate } from 'react-router-dom'

function PartnerRestaurant() {

    const navigate = useNavigate()

    const restaurantDetails = useSelector((s) => s.restaurant)
    console.log("resdet: ", restaurantDetails);
    return (
        <div className='partnerRestaurant'>
            <div className='PartnerHome'>
                <PartnerHomeHeader />
            </div>

            {
                restaurantDetails.data.map((e) => <div onClick={() => navigate("/partner/register/create-your-restaurant", { state: { data: e } })} key={e._id} className='restaurantData'>
                    <div>{e.restaurant_name
                    } | RES ID {e._id}</div>
                    <div>{e.restaurant_complete_address}</div>
                    <div className='image'>
                        <img src={e.restaurant_image_URL} alt="" />
                    </div>
                </div>)

            }
        </div>
    )
}

export default PartnerRestaurant