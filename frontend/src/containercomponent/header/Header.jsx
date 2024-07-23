import Zomato from "../../component/zomato/Zomato"
import Search from "../../component/search/Search"
import LoginStatus from "../../component/loginstatus/LoginStatus"
import "./Header.css"

function Header(props) {

    console.log("status in header", props.status);
    const defaultValue = 0

    return (
        <div id="header">
            <Zomato status={props.status || defaultValue} />
            <Search search={props.search} emptySearch={props.emptySearch} />
            <LoginStatus status={props.status || defaultValue} />
        </div>
    )
}
export default Header