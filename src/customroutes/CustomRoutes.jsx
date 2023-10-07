import { Routes, Route } from "react-router-dom"
import HomePage from "../routecomponent/homepage/HomePage"
import LoginPage from "../routecomponent/loginpage/LoginPage"
import DiningOut from "../routecomponent/diningout/DiningOut"
import NightLife from "../routecomponent/nightlife/NightLife"

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/login/loggedin/:status" element={<HomePage/>} />
            <Route path="/Diningout/:status" element={<DiningOut/>}/>
            <Route path="/nightlife/:status" element={<NightLife/>}/>
        </Routes>
    )
}
export default CustomRoutes