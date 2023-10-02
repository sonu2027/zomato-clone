import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"
import ProductType from "../../containercomponent/producttype/ProductType"

function HomePage(){
    const {status}=useParams()
    return(
        <>
        <Header status={status}/>
        <ProductType/>
        </>
    )
}
export default HomePage