// importing css
import "./ProductListingButton.css"

// importing icons from react-icons
import { MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus, BsFillBookmarkFill } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";

import { Link } from "react-router-dom";

function ProductListingButton(props) {

    return (
        <div className="button">
            <button>
                <MdOutlineDirections className="icon" />
                <span>Direction</span>
            </button>
            {props.status == 1 ?
                <>
                    {props.bookmarked == true ?
                        <>
                            <button onClick={props.handleBookmark} >
                                <BsFillBookmarkFill style={{ color: "rgb(255, 126, 139)" }} className="icon" />
                                <span>Bookmark</span>
                            </button>
                        </> :
                        <>
                            <button onClick={props.handleBookmark}>
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
            <button>
                <PiShareFatLight className="icon" />
                <span> Share</span>
            </button>
        </div>
    )
}

export default ProductListingButton