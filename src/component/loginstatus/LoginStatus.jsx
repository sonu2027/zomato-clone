// import { useEffect, useState } from "react"
import "./LoginStatus.css"
import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md"
import { useState } from "react"
function LoginStatus(props) {

    const [getOption, setGetOption] = useState(true)
    return (
        <div id="login-status">

            {props.status ? (
                // "Sonu"
                <div id="after-login">
                    <span id="account">&nbsp;S&nbsp;</span>&nbsp;
                    <span>Sonu</span>
                    {getOption == true ?
                        <>
                            <MdOutlineKeyboardArrowDown onClick={() => setGetOption(false)} className="after-login-option" />
                        </>
                        :
                        <>
                            <MdOutlineKeyboardArrowUp onClick={() => setGetOption(true)}
                                className="after-login-option" />
                            <div id="option">
                                <Link to="/">
                                    <button>Log out</button>
                                </Link>
                            </div>
                        </>
                    }
                    {/* <MdOutlineKeyboardArrowDown className="after-login-option"/>
                <MdOutlineKeyboardArrowUp className="after-login-option"/> */}
                </div>
            ) :
                (
                    <>
                        <Link to="/login" style={{ color: "grey", textDecoration: "none" }}>Log in
                        </Link>
                        <div style={{ color: "grey" }}>Sign up</div>
                    </>
                )
            }
        </div>
    )
}
export default LoginStatus