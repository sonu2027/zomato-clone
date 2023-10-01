import Zomato from "../../component/zomato/Zomato"
import Search from "../../component/Search/Search"
import LoginStatus from "../../component/loginstatus/LoginStatus"
import "./Header.css"

function Header(){
    return(
        <div id="header">
        <Zomato/>
        <Search/>
        <LoginStatus/>
        </div>
    )
}
export default Header