// importing css
import "./Search.css"

// importing icons from react-icons
import { BsSearch } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"

// importing location icon
import location from "../../assets/zomato/location.jpg"

// importing hooks
import { useContext, useEffect } from "react"

// importing context api
import openSearch from "../../context/openSearch"

function Search(props) {

    const { searchBox, setSearchBox } = useContext(openSearch)

    useEffect(() => {
        if (searchBox == true) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
        }
    }, [searchBox])

    const removeSearch = (e) => {
        e.stopPropagation()
        props.emptySearch("")
        setSearchBox(false)
    }

    const handlesearch = (e) => {
        e.stopPropagation()
        setSearchBox(true)
        setTimeout(function () {
            document.getElementsByClassName("open-search")[0].style.opacity = "1"; // Show the box after 0 seconds
            document.getElementsByClassName("open-search")[0].style.transform = "translateY(0)"; // Move the box from bottom to top
        });
    }

    window.addEventListener("click", ()=>{
        if(searchBox){
            setSearchBox(false)
        }
    })

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
                            <div onClick={(e)=>e.stopPropagation()} className="open-search">
                                <RxCross1 className="cross-icon-open-search" onClick={removeSearch} />
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
                            <BsSearch onClick={handlesearch} style={{
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