import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"
import ProductType from "../../containercomponent/producttype/ProductType"
import TopBrand from "../../containercomponent/topbrands/TopBrand"
import Restaurant from "../../containercomponent/restaurant/Restaurant"

function HomePage(){
    const {status}=useParams()
    return(
        <>
        <Header status={status}/>
        <ProductType/>
        <TopBrand/>
        <Restaurant/>
        </>
    )
}
export default HomePage