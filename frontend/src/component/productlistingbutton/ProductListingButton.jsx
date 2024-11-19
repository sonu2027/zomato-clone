// importing css
import "./ProductListingButton.css"

// importing icons from react-icons
import { MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus, BsFillBookmarkFill } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductListingButton(props) {

    const customerDetails = useSelector((s) => s.customer.data)
    console.log("props.bookmarked: ", props.bookmarked);

    return (
        <div className="button">
            {/* <button>
                <MdOutlineDirections className="icon" />
                <span>Direction</span>
            </button> */}
            {customerDetails ?
                <>
                    {props.bookmarked ?
                        <>
                            <button onClick={props.handleRemoveBookmark} >
                                <BsFillBookmarkFill style={{ color: "rgb(255, 126, 139)" }} className="icon" />
                                <span>Bookmark</span>
                            </button>
                        </> :
                        <>
                            <button onClick={props.handleAddBookmark}>
                                <BsBookmarkPlus className="icon" />
                                <span>Bookmark</span>
                            </button>
                        </>}
                </> :
                <>
                    <Link style={{ textDecoration: "none", color: "#222" }} to="/login" >
                        <button>
                            <BsBookmarkPlus className="icon" />
                            <span >Bookmark</span>
                        </button>
                    </Link>
                </>}
            {/* <button>
                <PiShareFatLight className="icon" />
                <span> Share</span>
            </button> */}
        </div>
    )
}

export default ProductListingButton