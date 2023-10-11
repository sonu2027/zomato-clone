import { useLocation } from "react-router-dom"
import "./ProductListing.css"
import Header from "../../containercomponent/header/Header";
import { MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";

function ProductListing() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);

    // Access individual query parameters
    const status = queryParams.get('status');
    const shopName = queryParams.get('shopName');
    const rating = queryParams.get('rating');
    const price = queryParams.get('price');
    const time = queryParams.get('time');
    const calling = queryParams.get('calling')

    const address = queryParams.get('address')
    const distance = queryParams.get('distance')
    const image = queryParams.get('img')
    const aboutShop = queryParams.get('aboutShop')


    console.log("status and shopabme", status, shopName);
    return (
        <>
            {calling == "delivery" ?
                <>
                    <Header status={status} />
                    <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                    <div className="all-about-restaurant">
                        <img src={image} alt="Image" />
                        <div className="shop-details">
                            <div className="aboutshop">
                                <span>{shopName}</span>
                                <div style={{ color: "rgb(105, 105, 105)" }}>{aboutShop}</div>
                                {/* <div>{price}</div>
                                <div>{time} </div> */}
                            </div>
                            <div className="rating">
                                <div>{`${rating}★`}</div>
                                <div>{`${rating}★`}</div>
                            </div>
                        </div>
                        <div className="button">
                            <button>
                                <MdOutlineDirections className="icon" />
                                <span>Direction</span>
                            </button>
                            <button>
                                <BsBookmarkPlus className="icon" />
                                <span>Bookmark</span>
                            </button>
                            <button>
                                <PiShareFatLight className="icon" />
                                <span> Share</span>
                            </button>
                        </div>
                        <div className="route-button">
                            <button>Overview</button>
                            <button>Order Online</button>
                            <button>Reviews</button>
                            <button>Photos</button>
                            <button>Menu</button>
                        </div>
                        <hr />
                    </div>
                </> :
                <>
                    <Header status={status} />
                    <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                    <div className="all-about-restaurant">
                        <img src={image} alt="Image" />
                        <div className="shop-details">
                            <div className="aboutshop">
                                <span>{shopName}</span>
                                <div style={{ color: "rgb(105, 105, 105)" }} >{aboutShop}</div>
                                <div>{address}</div>
                                {/* <div>{price} </div>
                                <div>{distance}</div> */}
                            </div>
                            <div className="rating">
                                <div>{`${rating}★`}</div>
                                <div>{`${rating}★`}</div>
                            </div>
                        </div>
                        <div className="button">
                            <button>
                                <MdOutlineDirections className="icon" />
                                <span>Direction</span>
                            </button>
                            <button>
                                <BsBookmarkPlus className="icon" />
                                <span>Bookmark</span>
                            </button>
                            <button>
                                <PiShareFatLight className="icon" />
                                <span> Share</span>
                            </button>
                        </div>
                        <div className="route-button">
                            <button>Overview</button>
                            <button>Order Online</button>
                            <button>Reviews</button>
                            <button>Photos</button>
                            <button>Menu</button>
                        </div>
                        <hr />
                    </div>
                </>
            }
        </>
    )
}
export default ProductListing