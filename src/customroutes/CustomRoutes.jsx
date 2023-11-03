import { Routes, Route } from "react-router-dom"
import HomePage from "../routecomponent/homepage/HomePage"
import LoginPage from "../routecomponent/loginpage/LoginPage"
import DiningOut from "../routecomponent/diningout/DiningOut"
import NightLife from "../routecomponent/nightlife/NightLife"
import ProductListing from "../routecomponent/productlisting/ProductListing"
import BookmarkPage from "../routecomponent/Bookmark/BookmarkPage"
import Profile from "../routecomponent/profile/Profile"

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/login/loggedin/:status" element={<HomePage/>} />
            <Route path="/Diningout/:status" element={<DiningOut/>}/>
            <Route path="/nightlife/:status" element={<NightLife/>}/>
            <Route path="/login/loggedin" element={<ProductListing/>}/>
            <Route path="/login/loggedin/bookmark/:status" element={<BookmarkPage/>}/>
            <Route path="/login/loggedin/profile/:status" element={<Profile/>}/>
        </Routes>
    )
}
export default CustomRoutes