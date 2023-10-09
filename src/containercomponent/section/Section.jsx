import img0 from "../../assets/zomato/delivery.avif"
import img1 from "../../assets/zomato/diningOut.avif"
import img2 from "../../assets/zomato/nightLife.webp"

import img00 from "../../assets/zomato/delivery2.webp"
import img11 from "../../assets/zomato/diningOut2.avif"
import img22 from "../../assets/zomato/nightLife2.webp"

import { Link } from "react-router-dom"
import "./Section.css"
import { useState } from "react"

function Section(props) {
    const [deliveryColor, setDeliveryColor] = useState(true)
    const [diningOutColor, setDiningOutColor] = useState(false)
    const [nightLifeColor, setNightLifeColor] = useState(false)

    const defaultValue = 0
    console.log("status in section", props.status);
    return (
        <div id="section-main-div">
            <section id="section">

                <Link to={`/login/loggedin/${props.status || defaultValue}`}
                    style={{ textDecoration: "none" }}>
                    <div onClick={() => { setDiningOutColor(false); setDeliveryColor(true); setNightLifeColor(false) }} id="delivery">
                        {deliveryColor == true ?
                            < >
                                <img src={img0} alt="Image" />
                                <span style={{ color: "rgb(239, 79, 95)" }}>Delivery</span>
                            </> :
                            <>
                                <img src={img00} alt="Image" />
                                <span style={{ color: "rgb(63, 63, 63)" }}>Delivery</span>
                            </>}
                    </div>
                </Link>

                <Link to={`/diningout/${props.status || defaultValue}`} style={{ textDecoration: "none" }}>
                    <div onClick={() => { setDiningOutColor(true); setDeliveryColor(false); setNightLifeColor(false) }} id="dining-out">
                        {diningOutColor == false ?
                            <>
                                <img src={img11} alt="Image" />
                                <span style={{ color: "rgb(63, 63, 63)" }}>Dining Out</span>
                            </> :
                            <>
                                <img src={img1} alt="Image" />
                                <span style={{ color: "rgb(239, 79, 95)" }} >Dining Out</span>
                            </>}
                    </div>
                </Link>

                <Link to={`/nightlife/${props.status || defaultValue}`} style={{ textDecoration: "none" }}>
                    <div onClick={() => { setDiningOutColor(false); setDeliveryColor(false); setNightLifeColor(true) }} id="night-life">
                        {nightLifeColor == false ?
                            <>
                                <img src={img22} alt="Image" />
                                <span style={{ color: "rgb(63, 63, 63)" }}>Nightlife</span>
                            </> :
                            <>
                                <img src={img2} alt="Image" />
                                <span style={{ color: "rgb(239, 79, 95)" }}>Nightlife</span>
                            </>}
                    </div>
                </Link>
            </section>
            <hr className="hr-tag" />
        </div>
    )
}
export default Section