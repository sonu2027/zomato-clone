import React from 'react'
import "./ReceivedOrder.css"

function ReceivedOrder() {
    return (
        <div className='ReceivedOrder'>
            <div className='order-text'>Order for 2 chicken rolls and 1 plate momos</div>
            <div className='button'>
                <button className='accept'>Accept</button>
                <button className='reject'>Reject</button>
            </div>
        </div>
    )
}

export default ReceivedOrder