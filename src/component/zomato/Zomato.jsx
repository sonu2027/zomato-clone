import { useState } from "react"
import "./Zomato.css"
import { MdPersonOutline } from "react-icons/md"
import { Link } from "react-router-dom"

function Zomato(props) {
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
                                <Link to="/">
                                    <button>Log out</button>
                                </Link>
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