import { BsSearch } from "react-icons/bs"
import "./Search.css"
import location from "../../assets/zomato/location.jpg"
import {useState} from "react"

import { RxCross1 } from "react-icons/rx"

function Search(props) {
    const [openSerach, setOpenSearch] = useState(false)

    return (
        <div id="search-box-main">
            <div id="location">
                <img id="location-icon" src={location} alt="" />
                <div style={{ color: "grey" }}>Kolkata</div>
            </div>
            <div id="search-item">
                <BsSearch onClick={()=>setOpenSearch(true)} style={{
                    color: "grey", height: "1.5rem",
                    width: "1.5rem"
                }} />
                {
                    openSerach ?
                        <>
                            <div className="open-search">
                                <div className="open-search-child">
                                    <input onChange={props.search} type="search" placeholder="Search for restaurant, cuisine or a dish" />
                                    <RxCross1 onClick={()=>setOpenSearch(false)}/>
                                </div>
                            </div>
                        </> :
                        <>
                            {console.log("working")}
                        </>
                }
                <input className="input-search" onChange={props.search} type="search" placeholder="Search for restaurant, cuisine or a dish" />
            </div>
        </div>
    )
}
export default Search