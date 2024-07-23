import img0 from "../../assets/zomato/delivery.avif"
import img1 from "../../assets/zomato/diningOut.avif"
import img2 from "../../assets/zomato/nightLife.webp"

import img00 from "../../assets/zomato/delivery2.webp"
import img11 from "../../assets/zomato/diningOut2.avif"
import img22 from "../../assets/zomato/nightLife2.webp"

import { Link } from "react-router-dom"
import "./Section.css"

function Section(props) {

    const defaultValue = 0
    console.log("status in section", props.status);
    return (
        <div id="section-main-div">
            <section id="section">

                <Link to={`/delivery`}
                    style={{ textDecoration: "none" }}>
                    <div id="delivery">
                        {props.page == "delivery" ?
                            <div className="border" style={{ borderBottom: "2px solid rgb(239, 79, 95)" }}>
                                <img src={img0} alt="Image" />
                                <span style={{ color: "rgb(239, 79, 95)" }}>Delivery</span>
                            </div> :
                            <div className="border">
                                <img src={img00} alt="Image" />
                                <span style={{ color: "rgb(63, 63, 63)" }}>Delivery</span>
                            </div>}
                    </div>
                </Link>

                <Link to={`/diningout`} style={{ textDecoration: "none" }}>
                    <div id="dining-out">
                        {props.page == "dining-out" ?
                            <div className="border" style={{ borderBottom: "2px solid rgb(239, 79, 95)" }}>
                                <img src={img1} alt="Image" />
                                <span style={{ color: "rgb(239, 79, 95)" }} >Dining Out</span>
                            </div> :
                            <div className="border">
                                <img src={img11} alt="Image" />
                                <span style={{ color: "rgb(63, 63, 63)" }}>Dining Out</span>
                            </div>}
                    </div>
                </Link>

                <Link to={`/nightlife`} style={{ textDecoration: "none" }}>
                    <div id="night-life">
                        {props.page == "night-life" ?
                            <div className="border" style={{ borderBottom: "2px solid rgb(239, 79, 95)" }}>
                                <img src={img2} alt="Image" />
                                <span style={{ color: "rgb(239, 79, 95)" }}>Nightlife</span>
                            </div> :
                            <div className="border">
                                <img src={img22} alt="Image" />
                                <span style={{ color: "rgb(63, 63, 63)" }}>Nightlife</span>
                            </div>}
                    </div>
                </Link>
            </section>
            <hr className="hr-tag" />
        </div>
    )
}
export default Section