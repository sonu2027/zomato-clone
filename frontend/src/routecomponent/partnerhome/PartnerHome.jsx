import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./partnerhome.css"
import ReceivedOrder from '../../component/receivedorder/ReceivedOrder';
import OrderCompleted from '../../component/ordercompleted/OrderCompleted';

import PartnerHomeHeader from '../../component/partnerhomeheader/PartnerHomeHeader.jsx';

function PartnerHome() {

  const [orderSection, setOrderSection] = useState("received-order")
  const [prevOrderSection, setPrevOrdeSectionr] = useState("received-order")


  const data1 = useSelector((s) => s.partner)
  console.log("data1: ", data1);
  const data2 = useSelector((s) => s.restaurant)
  console.log("data2: ", data2);

  return (
    <div className='PartnerHome'>
      <PartnerHomeHeader orderSection={orderSection} setOrderSection={setOrderSection} prevOrderSection={prevOrderSection} setPrevOrdeSectionr={setPrevOrdeSectionr}/>
      {
        orderSection == "received-order" && <ReceivedOrder />
      }
      {/* {
        orderSection == "accepted-order" && <AcceptedOrder />
      } */}
      {
        orderSection == "order-completed" && <OrderCompleted />
      }
    </div>
  )
}

export default PartnerHome