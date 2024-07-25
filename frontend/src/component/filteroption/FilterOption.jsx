import { useContext, useEffect, useState } from "react"
import "./FilterOption.css"
import { RxCross1 } from "react-icons/rx"
import applyFilter from "../../context/applyFilter"
function FilterOption(props) {

    const [cost, showCost] = useState(false)
    const [rating, showRating] = useState(false)
    const [sort, showSortBy] = useState(true)

    const { apply, setApply, toApply, setToApply, rangeVal, setRangeVal, range, setRange, costVal, setCostVal, price, setPrice, selectSort, setSelectSort } = useContext(applyFilter)

    useEffect(() => {
        setRange(rangeVal / 2)
        setPrice(costVal * 100)
    }, [rangeVal, costVal])


    console.log("toApply: ", toApply);

    return (
        <div className="filter-option">
            <div onClick={(e)=>e.stopPropagation()} className="child-div">

                <div className="child-div-filter">
                    <h2>Filters</h2>
                    <div>(Filter will not work please, go back)</div>
                    <RxCross1 className="cross-icon" onClick={props.setFilter} />
                </div>
                <hr style={{ overflow: "hidden", color: "yellow", width: "100%", border: "1px solid #fff" }} />

                <div className="container">
                    <div className="box1">
                        <button onClick={() => { showRating(false), showCost(false), showSortBy(true) }} className="box1-button">
                            <div>Sort By</div>
                            <div className="box1-button-div2">{selectSort}</div>
                        </button>
                        <button>Cuisines</button>
                        <button onClick={() => { showRating(true), showCost(false), showSortBy(false) }}>Rating</button>
                        <button onClick={() => { showRating(false), showCost(true), showSortBy(false) }}>Cost Per Person</button>
                        <button>More filters</button>
                    </div>

                    {
                        sort && <div className="box2">

                            <div
                                onClick={() => setSelectSort("Popularity")}
                                className="box"
                            >
                                <input
                                    onChange={() => setSelectSort("Popularity")}
                                    checked={selectSort == "Popularity"}
                                    type="radio"
                                    name="sorting"
                                    id="popularity"
                                />
                                &nbsp;
                                <label
                                    htmlFor="popularity"
                                >Popularity</label>
                            </div>

                            <div
                                onClick={() => setSelectSort("Rating: High to Low")}
                                className="box"
                            >
                                <input
                                    onChange={() => setSelectSort("Rating: High to Low")} checked={selectSort == "Rating: High to Low"}
                                    type="radio" name="sorting"
                                    id="ratinghightolow"
                                />
                                &nbsp;
                                <label
                                    htmlFor="ratinghightolow"
                                >Rating: High to Low</label>
                            </div>

                            {
                                props.passing == "delivery" ?
                                    <>
                                        <div
                                            onClick={() => setSelectSort("Delivery Time")}
                                            className="box"
                                        >
                                            <input
                                                onChange={() => setSelectSort("Delivery Time")}
                                                checked={selectSort == "Delivery Time"}
                                                type="radio"
                                                name="sorting"
                                                id="deliverytime"
                                            />
                                            &nbsp;
                                            <label
                                                htmlFor="deliverytime"
                                            >Delivery Time</label>
                                        </div>
                                    </> :
                                    <>
                                        <div
                                            onClick={() => setSelectSort("Distance")}
                                            className="box"
                                        >
                                            <input
                                                onChange={() => setSelectSort("Distance")}
                                                checked={selectSort == "Distance"}
                                                type="radio"
                                                name="sorting"
                                                id="distance"
                                            />
                                            &nbsp;
                                            <label
                                                htmlFor="distance"
                                            >Distance</label>
                                        </div>
                                    </>
                            }

                            <div
                                onClick={() => setSelectSort("Cost: Low to High")}
                                className="box"
                            >
                                <input
                                    onChange={() => setSelectSort("Cost: Low to High")}
                                    checked={selectSort == "Cost: Low to High"}
                                    type="radio"
                                    name="sorting"
                                    id="costlowtohigh"
                                />
                                &nbsp;
                                <label
                                    htmlFor="costlowtohigh"
                                >Cost: Low to High</label>
                            </div>

                            <div
                                onClick={() => setSelectSort("Cost: High to Low")}
                                className="box"
                            >
                                <input
                                    onChange={() => setSelectSort("Cost: High to Low")}
                                    checked={selectSort == "Cost: High to Low"}
                                    type="radio"
                                    name="sorting"
                                    id="costhightolow"
                                />
                                &nbsp;
                                <label
                                    htmlFor="costhightolow"
                                >Cost: High to Low</label>
                            </div>

                        </div>
                    }
                    {
                        rating && <div className="box3">
                            Rating <br />
                            {
                                rangeVal <= 6 ? <div>Any</div> : <div>{range}</div>
                            }
                            <br />
                            <div className="input-range">
                                <input onChange={(e) => setRangeVal(e.target.value)} value={rangeVal} min={6} max={10} type="range" name="" id="" />
                                &nbsp;
                            </div>
                        </div>
                    }
                    {
                        cost && <div className="box4">
                            Cost per person <br />
                            <div>{price} - Any</div>
                            <br />
                            <div className="input-range">
                                <input onChange={(e) => setCostVal(e.target.value)} value={costVal} min={0} max={10} type="range" name="" id="" />
                                &nbsp;
                            </div>
                        </div>
                    }
                </div>
                <hr style={{ overflow: "hidden", color: "yellow", width: "100%", border: "1px solid #fff" }} />

                <div className="control">

                    <button
                        onClick={() => { setToApply(["Popularity", 0, 0]), setRangeVal(0), setCostVal(0), setRange(0), setPrice(0), setApply(false), setSelectSort("Popularity"), props.setFilter() }}
                        style={{ border: "none", fontSize: "1.1rem", backgroundColor: "transparent" }}
                    >Clear all</button>

                    <button
                        onClick={() => { setToApply([selectSort, range, price]), setApply(true), props.setFilter() }}
                        className="apply"
                    >Apply</button>
                </div>

            </div>
        </div>
    )
}

export default FilterOption