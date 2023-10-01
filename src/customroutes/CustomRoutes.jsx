import { Routes, Route } from "react-router-dom"
import HomePage from "../routecomponent/homepage/HomePage"
import ProductPage from "../routecomponent/productpage/ProductPage"

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product" element={<ProductPage/>} />
        </Routes>
    )
}
export default CustomRoutes