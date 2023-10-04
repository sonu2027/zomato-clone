import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"
import ProductType from "../../containercomponent/producttype/ProductType"
import TopBrand from "../../containercomponent/topbrands/TopBrand"
import Restaurant from "../../containercomponent/restaurant/Restaurant"
import Section from "../../containercomponent/section/Section"

function HomePage(){
    const {status}=useParams()
    return(
        <>
        <Header status={status}/>
        <Section/>
        <ProductType/>
        <TopBrand/>
        <Restaurant/>
        </>
    )
}
export default HomePage