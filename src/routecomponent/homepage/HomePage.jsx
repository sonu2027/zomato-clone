import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"

function HomePage(){
    const {status}=useParams()
    return(
        <>
        <Header status={status}/>
        </>
    )
}
export default HomePage