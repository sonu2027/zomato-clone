import React from 'react'
import { useSelector } from 'react-redux'

function PartnerHome() {

    const data1=useSelector((s)=>s.partner)
    console.log("data1: ",data1);
    const data2=useSelector((s)=>s.restaurant)
    console.log("data2: ",data2);

  return (
    <div>PartnerHome</div>
  )
}

export default PartnerHome