import "./NightLife"
import { useParams } from "react-router-dom"
import Header from "../../containercomponent/header/Header"
import Section from "../../containercomponent/section/Section"

function NightLife(){
    const {status}=useParams()
    console.log("status in night life", status);
    return(
        <>
        <Header status={status}/>
        <Section status={status}/>
        <h4 style={{textAlign:"center", margin:"1rem 0"}}>In developement phase</h4>
        </>
    )
}
export default NightLife