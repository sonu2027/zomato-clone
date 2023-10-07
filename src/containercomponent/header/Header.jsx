import Zomato from "../../component/zomato/Zomato"
import Search from "../../component/search/Search"
import LoginStatus from "../../component/loginstatus/LoginStatus"
import "./Header.css"
// import { useParams } from "react-router-dom"

function Header(props){

    console.log("status in header", props.status);

    // const {loginStatus}=useParams()
    const defaultValue=0
   
    return(
        <div id="header">
        <Zomato status={props.status || defaultValue}/>
        <Search/>
        {/* login={loginStatus || defaultValue} */}
        <LoginStatus status={props.status || defaultValue}/>
        </div>
    )
}
export default Header