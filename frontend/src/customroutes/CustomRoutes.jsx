import { Routes, Route } from "react-router-dom"
import HomePage from "../routecomponent/homepage/HomePage"
import LoginPage from "../routecomponent/loginpage/LoginPage"
import DiningOut from "../routecomponent/diningout/DiningOut"
import NightLife from "../routecomponent/nightlife/NightLife"
import ProductListing from "../routecomponent/productlisting/ProductListing"
import BookmarkPage from "../routecomponent/Bookmark/BookmarkPage"
import Profile from "../routecomponent/profile/Profile"
import PartnerLogin from "../routecomponent/partnerLogin/PartnerLogin"
import PartnerRegister from "../routecomponent/partnerRegister/PartnerRegister"
import CreateRestaurant from "../routecomponent/createrestaurant/CreateRestaurant"
import PartnerHome from "../routecomponent/partnerhome/PartnerHome"
import PartnerRestaurant from "../routecomponent/partnerrestaurant/PartnerRestaurant.jsx"
import PartnerProfile from "../component/partnerprofile/PartnerProfile.jsx"
import PartnerAccountSetting from "../component/partneraccountsetting/PartnerAccountSetting.jsx"
import Cart from "../routecomponent/cart/Cart.jsx"
import Signup from "../routecomponent/signupPage/Signup.jsx"

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/delivery" element={<HomePage />} />
            <Route path="/Diningout" element={<DiningOut />} />
            <Route path="/nightlife" element={<NightLife />} />
            <Route path="/login/loggedin" element={<ProductListing />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
            <Route path="/login/loggedin/profile/:status" element={<Profile />} />
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/register" element={<PartnerRegister />} />
            <Route path="/partner/register/create-your-restaurant" element={<CreateRestaurant />} />
            <Route path="/partner/register/edit-your-restaurant" element={<CreateRestaurant />} />
            <Route path="/partner/home/restaurant" element={<PartnerRestaurant />} />
            <Route path="/partner/home" element={<PartnerHome />} />
            <Route path="/partner/profile" element={<PartnerProfile />} />
            <Route path="/partner/setting/:change" element={<PartnerAccountSetting />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}
export default CustomRoutes