import "./ProductSection.css"
import { useEffect, useState } from "react"

import Overview from "../../productDetailsSectionComponent/overview/Overview"
import OrderOnline from "../../productDetailsSectionComponent/orderonline/OrderOnline"
import Menu from "../../productDetailsSectionComponent/menu/Menu"
import Photos from "../../productDetailsSectionComponent/photos/Photos"
import Reviews from "../../productDetailsSectionComponent/reviews/Reviews"

function ProductSection(props) {

    const [prevSection, setPrevSection] = useState("")

    useEffect(() => {
        const element = document.getElementsByClassName("productsection-overview")
        element[0].style.borderBottom = "2px solid rgb(239, 79, 95)"
        setPrevSection("productsection-overview")
    }, [])

    const handleSection = (e) => {
        console.log("event: ", e, e.target.className);

        const element = document.getElementsByClassName(e.target.className)
        element[0].style.borderBottom = "2px solid rgb(239, 79, 95)"

        const prevElement = document.getElementsByClassName(prevSection)
        prevElement[0].style.borderBottom = "none"

        setPrevSection(e.target.className)
    }

    return (
        <>
            <div className="route-button">

                <button onClick={handleSection} className="productsection-overview" >Overview</button>

                <button onClick={handleSection} className="productsection-orderonline"  >Order Online</button>

                {/* <button onClick={handleSection} className="productsection-reviews"  >Reviews</button>

                <button onClick={handleSection} className="productsection-photos"  >Photos</button> */}

                <button onClick={handleSection} className="productsection-menu" >Menu</button>

            </div>
            <div>
                <hr className="productsection-overview" />
                {
                    prevSection === "productsection-overview" ? <Overview resId={props.resId} arr={props.arr} /> :

                        prevSection === "productsection-orderonline" ? <OrderOnline resId={props.resId} /> :

                            prevSection === "productsection-reviews" ? <Reviews /> :

                                prevSection === "productsection-photos" ? <Photos /> : <Menu resId={props.resId} />
                }
            </div>
        </>
    )
}
export default ProductSection