// importing css
import "./Search.css"

// importing icons from react-icons
import { BsSearch } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"

// importing location icon
import location from "../../assets/zomato/location.jpg"

// importing hooks
import { useContext } from "react"

// importing context api
import openSearch from "../../context/openSearch"

function Search(props) {

    const { searchBox, setSearchBox } = useContext(openSearch)

    return (
        <div id="search-box-main">
            <div id="location">
                <img id="location-icon" src={location} alt="" />
                <div style={{ color: "grey" }}>Kolkata</div>
            </div>
            <div id="search-item">
                {
                    searchBox == true ?
                        <>
                            <div className="open-search">
                                <RxCross1 className="cross-icon-open-search" onClick={() => setSearchBox(false)} />
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
                            <BsSearch onClick={() => setSearchBox(true)} style={{
                                color: "grey", height: "1.5rem",
                                width: "1.5rem"
                            }} />
                        </>
                }
                <input className="input-search" onChange={props.search} type="search" placeholder="Search for restaurant, cuisine or a dish" />
            </div>
        </div>
    )
}
export default Search