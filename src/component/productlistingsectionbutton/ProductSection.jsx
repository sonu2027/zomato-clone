import "./ProductSection.css"
import { useState } from "react"

import Overview from "../../productDetailsSectionComponent/overview/Overview"
import OrderOnline from "../../productDetailsSectionComponent/orderonline/OrderOnline"
import Menu from "../../productDetailsSectionComponent/menu/Menu"
import Photos from "../../productDetailsSectionComponent/photos/Photos"
import Reviews from "../../productDetailsSectionComponent/reviews/Reviews"

function ProductSection(props) {
    const [overview, setOverview] = useState(true)
    const [orderonline, setOrderonline] = useState(false)
    const [review, setReview] = useState(false)
    const [photos, setPhotos] = useState(false)
    const [menu, setMenu] = useState(false)

    const [callingSection, setCallingSection] = useState("overview")


    return (
        <>
            <div className="route-button">
                {callingSection == "overview" ?
                    <>
                        <button style={{ borderBottom: "2px solid rgb(239, 79, 95)" }} onClick={() => {
                            setCallingSection("overview"); setOverview(true); setOrderonline(false); setReview(false); setPhotos(false); setMenu(false)
                        }}>Overview</button>
                    </> :
                    <>
                        <button onClick={() => { setCallingSection("overview"); setOverview(true); setOrderonline(false); setReview(false); setPhotos(false); setMenu(false) }}>Overview</button></>
                }

                {
                    callingSection == "orderonline" ?
                        <>
                            <button style={{ borderBottom: "2px solid rgb(239, 79, 95)" }} onClick={() => { setCallingSection("orderonline"); setOrderonline(true); setOverview(false); setReview(false); setPhotos(false); setMenu(false) }}>Order Online</button>
                        </> :
                        <>
                            <button onClick={() => { setCallingSection("orderonline"); setOrderonline(true); setOverview(false); setReview(false); setPhotos(false); setMenu(false) }}>Order Online</button>
                        </>
                }

                {
                    callingSection == "reviews" ?
                        <>
                            <button style={{ borderBottom: "2px solid rgb(239, 79, 95)" }} onClick={() => { setCallingSection("reviews"); setOverview(false); setOrderonline(false); setReview(true); setPhotos(false); setMenu(false) }}>Reviews</button>
                        </> :
                        <>
                            <button onClick={() => { setCallingSection("reviews"); setOverview(false); setOrderonline(false); setReview(true); setPhotos(false); setMenu(false) }}>Reviews</button>
                        </>
                }

                {
                    callingSection == "photos" ?
                        <>
                            <button style={{ borderBottom: "2px solid rgb(239, 79, 95)" }} onClick={() => { setCallingSection("photos"); setPhotos(true); setOverview(false); setOrderonline(false); setReview(false); setMenu(false) }}>Photos</button>
                        </> :
                        <>
                            <button onClick={() => { setCallingSection("photos"); setPhotos(true); setOverview(false); setOrderonline(false); setReview(false); setMenu(false) }}>Photos</button>
                        </>
                }

                {
                    callingSection == "menu" ?
                        <>
                            <button style={{ borderBottom: "2px solid rgb(239, 79, 95)" }} onClick={() => { setCallingSection("menu"); setMenu(true); setPhotos(false); setOverview(false); setOrderonline(false); setReview(false) }}>Menu</button>
                        </> :
                        <>
                            <button onClick={() => { setCallingSection("menu"); setMenu(true); setPhotos(false); setOverview(false); setOrderonline(false); setReview(false) }}>Menu</button>
                        </>
                }
            </div>
            <div>
                {
                    overview ?
                        <>
                            <hr />
                            <Overview arr={props.arr} />
                        </> : <>
                            {
                                orderonline ?
                                    <>
                                        <hr />
                                        <OrderOnline />
                                    </> : <>
                                        {
                                            review ? <>
                                                <hr />
                                                <Reviews />
                                            </> : <>
                                                {
                                                    photos ? <>
                                                        <hr />
                                                        <Photos />
                                                    </> : <>
                                                        {
                                                            menu ? <>
                                                                <hr />
                                                                <Menu />
                                                            </> : <>monu</>
                                                        }
                                                    </>
                                                }
                                            </>
                                        }
                                    </>
                            }</>
                }
            </div>
        </>
    )
}
export default ProductSection