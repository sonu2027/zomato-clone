import Zomato from "../../component/zomato/Zomato"
import Search from "../../component/search/Search"
import LoginStatus from "../../component/loginstatus/LoginStatus"
import "./Header.css"
import { useState } from "react"

function Header(props) {

    console.log("status in header", props.status);
    const defaultValue = 0

    const [openSerach, setOpenSearch] = useState(false)

    function setopensearch(){
        setOpenSearch(true)
    }
    function deleteopensearch(){
        setOpenSearch(false)
    }

    return (
        <div id="header">
           <Zomato status={props.status || defaultValue} />
            <Search opensearch={openSerach} setopensearch={setopensearch} deleteopensearch={deleteopensearch} search={props.search}/>
            <LoginStatus status={props.status || defaultValue} />
        </div>
    )
}
export default Header