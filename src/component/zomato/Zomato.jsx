import { useState } from "react"
import "./Zomato.css"
import { MdPersonOutline } from "react-icons/md"
import { Link } from "react-router-dom"

function Zomato(props) {

    console.log("status in zomato", props.status);
    const [getOption, setGetOption] = useState(false)

    window.addEventListener("click", ()=>{
        if(getOption){
            setGetOption(false)
        }
    })

    return (
        <div id="zomato">
            {props.status == 1 ? (
                <>
                    <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/login/loggedin/${props.status}`}>
                        <h2><i>Zomato</i></h2>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/login/loggedin/${props.status}`}>
                        <h1><i>Zomato</i></h1>
                    </Link>
                    {
                        getOption == true ?
                            <>
                                <MdPersonOutline onClick={(e) => {
                                    e.stopPropagation()
                                    setGetOption(false)
                                }} id="zomato-button" />
                                <div id="option">
                                    <Link to={`/login/loggedin/profile/${props.status}`}>
                                        <button className="make-border-radius-8px-top">Profile</button>
                                    </Link>
                                    <button>Notifications</button>
                                    <Link to={`/login/loggedin/bookmark/${props.status}`}>
                                        <button>Bookmark</button>
                                    </Link>
                                    <button>Reviews</button>
                                    <button>Network</button>
                                    <button>Find Friends</button>
                                    <button>Setting</button>
                                    <Link to={`/login/loggedin/${0}`}>
                                        <button className="make-border-radius-8px-bottom">Log out</button>
                                    </Link>
                                </div>
                            </> :
                            <MdPersonOutline onClick={(e) => {
                                e.stopPropagation()
                                setGetOption(true)
                            }} id="zomato-button" />
                    }
                </>
            ) :
                (
                    <>
                        <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/login/loggedin/${props.status}`}>
                            <h2><i>Zomato</i></h2>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "rgb(16, 15, 15)" }} to={`/login/loggedin/${props.status}`}>
                            <h1><i>Zomato</i></h1>
                        </Link>
                        <Link to="/login">
                            <MdPersonOutline id="zomato-button" />
                        </Link>
                    </>
                )}
        </div>
    )
}
export default Zomato