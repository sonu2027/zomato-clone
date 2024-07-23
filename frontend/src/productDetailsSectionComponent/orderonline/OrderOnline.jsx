import { useSelector } from "react-redux"
import "./OrderOnline.css"
import { useEffect, useState } from "react";
import CuisinesItems from "../../component/CuisinesItems.jsx";

function OrderOnline(props) {

    const allCuisines = useSelector((s) => s.allCuisines.data)
    console.log("allcuisines: ", allCuisines);
    const [filteredCuisines, setFilteredCuisines] = useState({})
    const [items, setItems] = useState([])
    const [prevEvent, setPrevEvent] = useState(null)

    useEffect(() => {
        let obj = {}
        allCuisines.map((e) => {
            if (e.restaurantId == props.resId) {
                obj = e
            }
        })
        console.log("filteredCuisines are: ", obj.cuisines);
        setFilteredCuisines(obj.cuisines)
    }, [])

    const handleItems = (array, event) => {
        setPrevEvent(event.target)
        if (prevEvent) {
            prevEvent.style.backgroundColor = "white"
            prevEvent.style.color = "black"
            prevEvent.style.fontWeight = "500"
        }
        console.log("event: ", event);
        setItems(array)
        event.target.style.backgroundColor = "rgb(255, 238, 240)"
        event.target.style.color = "rgb(255, 126, 139)"
        event.target.style.fontWeight = "700"
    }

    return (
        <div className="orderOnline">
            <div className="div1">
                {
                    filteredCuisines ? Object.entries(filteredCuisines).map((e, i) => <div className="div11" onClick={(event) => handleItems(e, event)} key={e}>{e[0]} ({e[1].length})</div>) :
                        <div>sorry, no items are there! 🧐</div>
                }
            </div>
            <div className="div2">
                <div className="div21">{items[0]}</div>
                {
                    items.length > 0 && items[1].map((e) => <div className="div22" key={e.name}>
                        <CuisinesItems resId={props.resId} Name={e.name} price={e.price} />
                    </div>)
                }
            </div>
        </div>
    )
}
export default OrderOnline