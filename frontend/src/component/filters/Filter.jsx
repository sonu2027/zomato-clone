import "./Filter.css"
import f1 from "../../assets/filters/filter.jpg"
import applyFilter from "../../context/applyFilter"
import { useContext, useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
function Filter(props) {
    const { toApply, setToApply, setRangeVal, setRange, countFilter, setCountFilter, setApply } = useContext(applyFilter)
    const [rating, setRating] = useState([false, 0])
    useEffect(() => {
        let count = 0;
        toApply.map((e) => {
            if (e != "Popularity" && e != 0) {
                count++
            }
        })
        setCountFilter(count)
        if (toApply[1] > 0) {
            setRating([true, toApply[1]])
        }
        else {
            setRating([false, 0])
        }
    }, [toApply])
    function handleRating() {
        setRating([false, 0])
        let modifiedToApply = [...toApply];
        modifiedToApply[1] = 0;
        setRange(0)
        setRangeVal(0)
        setToApply(modifiedToApply);
    }
    function handleRating2() {
        let modifiedToApply = [...toApply];
        modifiedToApply[1] = 4;
        setRangeVal(8)
        setRange(4)
        setToApply(modifiedToApply)
    }

    return (
        <div className="filter-parent">
            {
                countFilter == 0 ?
                    <>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            props.setFilter(e)
                        }} className="filter">
                            <img src={f1} alt="" />
                            <div>Filters</div>
                        </button>
                    </> :
                    <>
                        <button disabled style={{ padding: "9px 16px" }} onClick={(e) => {
                            e.stopPropagation()
                            props.setFilter(e)
                        }} className="filter">
                            <div style={{ backgroundColor: "rgb(239, 79, 95)", color: "#fff", padding: "3px 6px", borderRadius: "4px" }}>{countFilter}</div>
                            <div>Filters</div>
                        </button>
                    </>
            }
            {
                rating[0] == true ?
                    <>
                        <button disabled onClick={handleRating} style={{ backgroundColor: "rgb(239, 79, 95)", color: "#fff" }} className="filter">
                            Rating: {rating[1].toFixed(1)}+
                            <RxCross1 />
                        </button>
                    </> :
                    <>
                        <button disabled onClick={() => { handleRating2(), setApply(true) }} className="filter">
                            Rating: 4.0+
                        </button>
                    </>
            }
            <button disabled className="filter">
                Cuisines
                <select name="" id=""></select>
            </button>
        </div>
    )
}

export default Filter