import { useState } from "react"
import "./Zomato.css"
import { MdPersonOutline } from "react-icons/md"
import { Link } from "react-router-dom"

function Zomato(props) {
    console.log("status in zomato", props.status);
    const [getOption, setGetOption] = useState(false)
    return (
        <div id="zomato">
            {props.status == 1 ? (
                <>
                    <h1><i>Zomato</i></h1>
                    <h2><i>Zomato</i></h2>
                    {
                        getOption == true ?
                            <>
                                <MdPersonOutline onClick={() => setGetOption(false)} id="zomato-button" />
                                {/* <Link to="/">
                                    <button>Log out</button>
                                </Link> */}
                                <div id="option">
                                <button className="make-border-radius-8px-top">Profile</button>
                                <button>Notifications</button>
                                <button>Bookmark</button>
                                <button>Reviews</button>
                                <button>Network</button>
                                <button>Find Friends</button>
                                <button>Setting</button>
                                <Link to={`/login/loggedin/${0}`}>
                                    <button className="make-border-radius-8px-bottom">Log out</button>
                                </Link>
                            </div>
                            </> :
                            <MdPersonOutline onClick={() => setGetOption(true)} id="zomato-button" />
                    }
                </>
            ) :
                (
                    <>
                        <h1><i>Zomato</i></h1>
                        <h2><i>Zomato</i></h2>
                        <Link to="/login">
                            <MdPersonOutline id="zomato-button" />
                        </Link>
                    </>
                )}
        </div>
    )
}
export default Zomato