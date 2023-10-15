import { BsSearch } from "react-icons/bs"
import "./Search.css"
import location from "../../assets/zomato/location.jpg"
// import {useState } from "react"

import { RxCross1 } from "react-icons/rx"

function Search(props) {
    // const [openSerach, setOpenSearch] = useState(false)

    // useEffect(()=>{
    //     console.log("useeffect is running");
    //     if(props.search==""){
    //         setOpenSearch(false)
    //         console.log("useeffect showed action");
    //     }
    // })

    return (
        <div id="search-box-main">
            <div id="location">
                <img id="location-icon" src={location} alt="" />
                <div style={{ color: "grey" }}>Kolkata</div>
            </div>
            <div id="search-item">
                <BsSearch onClick={props.setopensearch} style={{
                    color: "grey", height: "1.5rem",
                    width: "1.5rem"
                }} />
                {
                    props.opensearch ?
                        <>
                            <div className="open-search">
                            <RxCross1 className="cross-icon-open-search" onClick={props.deleteopensearch} />
                                <div className="open-search-child">
                                    <div className="open-search-grand-child">
                                        <BsSearch style={{
                                            color: "grey", height: "1rem",
                                            width: "1rem"
                                        }} />
                                        <input onChange={props.search} type="search" placeholder="Search for restaurant, cuisine or a dish" />
                                    </div>
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